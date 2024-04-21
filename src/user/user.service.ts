import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { Student } from '../student/entities/student.entity';
import { Employee } from '../employee/entities/employee.entity';
import { UniversityAgent } from '../university-agent/entities/university-agent.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existUser) {
      throw new BadRequestException('Вы уже зарегистрированы на сайте');
    }

    // Создаем пользователя в таблице User
    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      fio: createUserDto.fio,
      role: createUserDto.role,
    });

    // Если роль - student, сохраняем данные в таблицу Student
    if (createUserDto.role === 'student') {
      await Student.create({
        university: createUserDto.university,
        faculty: createUserDto.faculty,
        department: createUserDto.department,
        group: createUserDto.group,
        course: createUserDto.course,
        user: user, // связываем с пользователем
      }).save();
    }

    // Если роль - employee, сохраняем данные в таблицу Employee
    if (createUserDto.role === 'employee') {
      await Employee.create({
        city: createUserDto.city,
        companyName: createUserDto.companyName,
        user: user, // связываем с пользователем
      }).save();
    }

    // Если роль - university-agent, сохраняем данные в таблицу university_agent
    if (createUserDto.role === 'university_agent') {
      await UniversityAgent.create({
        user: user,
      }).save();
    }

    // Создаем JWT токен
    const token = this.jwtService.sign({ email: createUserDto.email });

    return { user, token };
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      }
    });
  }
}
