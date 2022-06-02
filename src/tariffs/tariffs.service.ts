import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TariffDocument } from 'src/schemas/tariff.schema';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';

@Injectable()
export class TariffsService {
  constructor(
    @InjectModel('Tariff') private readonly tariffModel: Model<TariffDocument>,
  ) {}

  async create(createTariffDto: CreateTariffDto) {
    try {
      const newObj = await this.tariffModel.create(createTariffDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    const res = await this.tariffModel.find();
    return res;
  }

  async findOne(id: string) {
    const res = await this.tariffModel.findById(id);
    return res;
  }

  async update(id: string, updateTariffDto: UpdateTariffDto) {
    try {
      const updatedObj = await this.tariffModel
        .findByIdAndUpdate(id, updateTariffDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.tariffModel.findByIdAndRemove(id).exec();
    return `Language with id ${id} successfully removed`;
  }
}
