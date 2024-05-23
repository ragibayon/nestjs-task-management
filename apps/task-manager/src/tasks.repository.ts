import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { TaskDocument } from './models/tasks.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksRepository extends AbstractRepository<TaskDocument> {
  protected readonly logger = new Logger(TasksRepository.name);
  constructor(@InjectModel('task') taskModel: Model<TaskDocument>) {
    super(taskModel);
  }
}
