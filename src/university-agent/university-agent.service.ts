import { Injectable } from '@nestjs/common';
import { CreateUniversityAgentDto } from './dto/create-university-agent.dto';
import { UpdateUniversityAgentDto } from './dto/update-university-agent.dto';

@Injectable()
export class UniversityAgentService {
  create(createUniversityAgentDto: CreateUniversityAgentDto) {
    return 'This action adds a new universityAgent';
  }

  findAll() {
    return `This action returns all universityAgent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} universityAgent`;
  }

  update(id: number, updateUniversityAgentDto: UpdateUniversityAgentDto) {
    return `This action updates a #${id} universityAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} universityAgent`;
  }
}
