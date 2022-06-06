import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleDocument } from 'src/schemas/role.schema';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel('Role') private readonly roleModel: Model<RoleDocument>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const newObj = await this.roleModel.create(createRoleDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    const res = await this.roleModel.find();
    return res;
  }

  async findOne(id: string) {
    const res = await this.roleModel.findById(id);
    return res;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    try {
      const updatedObj = await this.roleModel
        .findByIdAndUpdate(id, updateRoleDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.roleModel.findByIdAndRemove(id).exec();
    return `Role obj with id ${id} successfully removed`;
  }
}
