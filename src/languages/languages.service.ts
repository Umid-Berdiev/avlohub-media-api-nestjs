import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LanguageDocument } from 'src/schemas/language.schema';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel('Language')
    private readonly languageModel: Model<LanguageDocument>,
  ) {}

  async create(
    createLanguageDto: CreateLanguageDto,
  ): Promise<LanguageDocument> {
    try {
      const newObj = await this.languageModel.create(createLanguageDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<LanguageDocument[]> {
    const res = await this.languageModel.find();
    return res;
  }

  async findOne(id: string): Promise<LanguageDocument> {
    const res = await this.languageModel.findById(id);
    return res;
  }

  async update(
    id: string,
    updateLanguageDto: UpdateLanguageDto,
  ): Promise<LanguageDocument> {
    try {
      const updatedObj = await this.languageModel
        .findByIdAndUpdate(id, updateLanguageDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.languageModel.findByIdAndRemove(id).exec();
    return `Language with id ${id} successfully removed`;
  }
}
