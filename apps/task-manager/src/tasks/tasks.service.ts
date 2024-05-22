import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { UpdateTaskDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}
  async getTask(taskId: string) {
    return taskId;
  }
  async getAllTasks() {
    return 'all tasks';
  }
  async createTask(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }
  async updateTask(taskId: string, updateTaskDto: UpdateTaskDto) {
    return { taskId, updateTaskDto };
  }
  async deleteTask(taskId: string) {
    return taskId;
  }
}
