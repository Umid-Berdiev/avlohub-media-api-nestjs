import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from 'src/roles/roles.service';
import { User, UserDocument } from 'src/schemas/user.schema';
import { TariffsService } from 'src/tariffs/tariffs.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDetailsInterface } from './interfaces/user-details.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    private tariffService: TariffsService,
    private roleService: RolesService,
  ) {}

  _getUserDetails(user: UserDocument): UserDetailsInterface {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      uuid: user.uuid,
    };
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDetailsInterface | null> {
    const user = await this.userModel.findById(id).exec();
    return !user ? null : this._getUserDetails(user);
  }

  async create(
    username: string,
    email: string,
    hashedPassword: string,
    uuid: string,
  ): Promise<UserDocument> {
    const newUser = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
      uuid,
    });
    return newUser;
  }

  async update(id: string, payload: UpdateUserDto): Promise<any> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, payload)
      .exec();

    return updatedUser;
  }

  async updateRole(id: string, role_id: string): Promise<any> {
    try {
      const user = await this.userModel.findById(id).exec();
      const role = await this.roleService.findOne(role_id);

      if (user.roles.some((item) => item === role)) {
        return 'This role was already attached to this user!';
      }

      user.roles = [...user.roles, role];
      user.save();
      return 'success';
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async buyTariff(user_id: string, tariff_id: string) {
    try {
      const tariff = await this.tariffService.findOne(tariff_id);
      const user = await this.userModel.findById(user_id);
      const newBalance = user.balance - tariff.price;
      user.balance = newBalance;
      user.tariff = tariff.id;
      user.save();

      return 'success';
    } catch (error) {
      return error.message;
    }
  }
}
