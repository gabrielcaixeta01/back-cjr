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
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course-dto';
import { UpdateCourseDto } from './dto/update-course-dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(
    @Body(ValidationPipe) coursesData: CreateCourseDto | CreateCourseDto[],
  ) {
    if (Array.isArray(coursesData)) {
      return await this.coursesService.createMany(coursesData);
    }
    return await this.coursesService.create(coursesData);
  }

  @Get()
  async findAll() {
    return await this.coursesService.findAll();
  }

  @Get(':id')
  async findCourse(@Param('id', ParseIntPipe) id: number) {
    return await this.coursesService.findCourse(id);
  }

  @Delete(':id')
  async deleteCourse(@Param('id', ParseIntPipe) id: number) {
    return await this.coursesService.deleteCourse(id);
  }

  @Patch(':id')
  async updateCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateCourseDto,
  ) {
    return await this.coursesService.updateCourse(id, data);
  }
}
