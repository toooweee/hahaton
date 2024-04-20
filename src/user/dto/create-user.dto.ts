import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator'
export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'Пароль должен быть не короче, чем 6 символов'})
    password: string;

    @IsNotEmpty()
    @IsString()
    fio: string;

    @IsNotEmpty()
    @IsString()
    role: string; // Роль пользователя (student, employee, university_agent)
    // Дополнительные поля для каждой роли
    university?: string; // Только для студента
    faculty?: string; // Только для студента
    department?: string; // Только для студента
    group?: string; // Только для студента
    course?: string; // Только для студента
    city?: string; // Только для сотрудника
    companyName?: string; // Только для сотрудника
}
