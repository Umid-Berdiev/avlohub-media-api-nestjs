import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewsDocument } from 'src/schemas/news.schema';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel('News') private readonly newsModel: Model<NewsDocument>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<NewsDocument> {
    try {
      const newObj = await this.newsModel.create(createNewsDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<NewsDocument[]> {
    const res = await this.newsModel.find().exec();
    return res;
  }

  async findOne(id: string): Promise<NewsDocument> {
    const res = await this.newsModel.findById(id).exec();
    return res;
  }

  async update(
    id: string,
    updateNewsDto: UpdateNewsDto,
  ): Promise<NewsDocument> {
    try {
      const updatedObj = await this.newsModel
        .findByIdAndUpdate(id, updateNewsDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.newsModel.findByIdAndRemove(id).exec();
    return `News obj with id ${id} successfully removed`;
  }
}
