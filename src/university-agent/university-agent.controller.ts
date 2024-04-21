import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UniversityAgentService } from './university-agent.service';
import { CreateUniversityAgentDto } from './dto/create-university-agent.dto';
import { UpdateUniversityAgentDto } from './dto/update-university-agent.dto';

@Controller('university-agent')
export class UniversityAgentController {
  constructor(
    private readonly universityAgentService: UniversityAgentService,
  ) {}

  @Post()
  create(@Body() createUniversityAgentDto: CreateUniversityAgentDto) {
    return this.universityAgentService.create(createUniversityAgentDto);
  }

  @Get()
  findAll() {
    return this.universityAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityAgentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniversityAgentDto: UpdateUniversityAgentDto,
  ) {
    return this.universityAgentService.update(+id, updateUniversityAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityAgentService.remove(+id);
  }
}
