import { Module } from '@nestjs/common';
import { UniversityAgentService } from './university-agent.service';
import { UniversityAgentController } from './university-agent.controller';

@Module({
  controllers: [UniversityAgentController],
  providers: [UniversityAgentService],
})
export class UniversityAgentModule {}
