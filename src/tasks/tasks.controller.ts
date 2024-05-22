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
  @Get('/')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('/')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask(taskId);
  }

  @Patch('/:taskId')
  updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('taskId') taskId: string,
  ) {
    return this.tasksService.updateTask(taskId, updateTaskDto);
  }

  @Delete('/:taskId')
  deleteTask(@Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
