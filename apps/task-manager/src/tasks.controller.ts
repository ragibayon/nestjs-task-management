import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.tasksService.create(createTaskDto);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  updateTask(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
  @Patch(':id/status')
  updateStatus(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
    return this.tasksService.updateStatus(id, updateTaskDto.status);
  }
}
