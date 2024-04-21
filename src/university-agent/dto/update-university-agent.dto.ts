import { PartialType } from '@nestjs/mapped-types';
import { CreateUniversityAgentDto } from './create-university-agent.dto';

export class UpdateUniversityAgentDto extends PartialType(
  CreateUniversityAgentDto,
) {}
