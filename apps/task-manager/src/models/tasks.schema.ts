import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractSchema } from '@app/common';
import { TaskStatus } from '../enums/task-status.enum';

@Schema({ versionKey: false })
export class TaskDocument extends AbstractSchema {
  @Prop()
  title: string;
  @Prop()
  desc: string;

  @Prop({ enum: Object.values(TaskStatus) })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(TaskDocument);
