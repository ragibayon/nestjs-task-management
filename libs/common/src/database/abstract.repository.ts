import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractSchema } from './abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';

// TDocument => generic type
export abstract class AbstractRepository<Document extends AbstractSchema> {
  protected abstract readonly logger: Logger;
  constructor(protected readonly model: Model<Document>) {}

  async create(document: Omit<Document, '_id'>): Promise<Document> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON() as unknown as Document;
  }

  async find(filterQuery: FilterQuery<Document>): Promise<Document[]> {
    return await this.model.find(filterQuery).lean<Document[]>(true);
  }

  async findOne(filterQuery: FilterQuery<Document>): Promise<Document> {
    const document = await this.model.findOne(filterQuery).lean<Document>(true);
    if (!document) {
      this.documentNotFound(filterQuery);
    }
    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<Document>,
    updateQuery: UpdateQuery<Document>,
  ): Promise<Document> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, updateQuery, {
        new: true,
      })
      .lean<Document>(true);
    if (!document) {
      this.documentNotFound(filterQuery);
    }
    return document;
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<Document>,
  ): Promise<Document> {
    return await this.model.findOneAndDelete(filterQuery).lean<Document>(true);
  }

  private documentNotFound(filterQuery: FilterQuery<Document>): void {
    this.logger.warn('Document was not found with filterQuery', filterQuery);
    throw new NotFoundException('Document was not found');
  }
}
