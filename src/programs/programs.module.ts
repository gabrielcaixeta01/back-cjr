import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProgramsController],
  providers: [ProgramsService, PrismaService],
})
export class ProgramsModule {}
