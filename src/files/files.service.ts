import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileDocument } from 'src/schemas/file.schema';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel('File')
    private readonly fileModel: Model<FileDocument>,
  ) {}

  async create(createFileDto: CreateFileDto) {
    try {
      const newObj = await this.fileModel.create(createFileDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    const res = await this.fileModel.find();
    return res;
  }

  async findOne(id: string) {
    const res = await this.fileModel.findById(id);
    return res;
  }

  async update(id: string, updateFileDto: UpdateFileDto) {
    try {
      const updatedObj = await this.fileModel
        .findByIdAndUpdate(id, updateFileDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.fileModel.findByIdAndRemove(id).exec();
    return `File with id ${id} successfully removed`;
  }
}
