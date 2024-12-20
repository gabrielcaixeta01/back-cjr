import { Public } from 'src/auth/decorators/isPublic.decorator';
import { CreateProfessorDto } from './dto/create-professor-dto';
import { UpdateProfessorDto } from './dto/update-professor-dto';
import { ProfessorsService } from './professors.service';
import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  NotFoundException,
} from '@nestjs/common';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  // Cria um professor
  @Public()
  @Post()
  async create(@Body(ValidationPipe) professorData: CreateProfessorDto) {
    return this.professorsService.create(professorData);
  }

  // Retorna todos os professores
  @Public()
  @Get()
  async findAll() {
    return this.professorsService.findAll();
  }

  // Retorna um professor específico pelo ID
  @Public()
  @Get(':id')
  async findProfessor(@Param('id', ParseIntPipe) id: number) {
    const professor = await this.professorsService.findProfessor(id);
    if (!professor) {
      throw new NotFoundException(`Professor com ID ${id} não encontrado.`);
    }
    return professor;
  }

  // Exclui um professor pelo ID
  @Public()
  @Delete(':id')
  async deleteProfessor(@Param('id', ParseIntPipe) id: number) {
    return this.professorsService.deleteProfessor(id);
  }

  // Atualiza as informações de um professor pelo ID
  @Public()
  @Patch(':id')
  async updateProfessor(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateProfessorDto,
  ) {
    return this.professorsService.updateProfessor(id, data);
  }
}
