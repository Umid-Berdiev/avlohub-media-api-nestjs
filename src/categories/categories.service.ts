import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDocument } from 'src/schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryDocument> {
    try {
      const newObj = await this.categoryModel.create(createCategoryDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<CategoryDocument[]> {
    const res = await this.categoryModel.find().exec();
    return res;
  }

  async findOne(id: string): Promise<CategoryDocument> {
    const res = await this.categoryModel.findById(id).exec();
    return res;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryDocument> {
    try {
      const updatedObj = await this.categoryModel
        .findByIdAndUpdate(id, updateCategoryDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.categoryModel.findByIdAndRemove(id).exec();
    return `Category with id ${id} successfully removed`;
  }
}
