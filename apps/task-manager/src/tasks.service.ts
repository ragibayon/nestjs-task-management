import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { UpdateTaskDto, CreateTaskDto } from './dto';
import { TaskStatus } from './enums/task-status.enum';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}
  async findAll() {
    return this.tasksRepository.find({});
  }
  async create(createTaskDto: CreateTaskDto) {
    if (!createTaskDto.status) {
      createTaskDto.status = TaskStatus.OPEN;
    }
    return this.tasksRepository.create(createTaskDto);
  }
  async findOne(_id: string) {
    return this.tasksRepository.findOne({ _id });
  }

  async update(_id: string, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.findOneAndUpdate(
      { _id },
      {
        $set: updateTaskDto,
      },
    );
  }
  async delete(_id: string) {
    return this.tasksRepository.findOneAndDelete({ _id });
  }

  async updateStatus(_id: string, status: TaskStatus) {
    return this.tasksRepository.findOneAndUpdate(
      { _id },
      {
        status,
      },
    );
  }
}
