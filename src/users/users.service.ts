import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDetailsInterface } from './interfaces/user-details.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  _getUserDetails(user: UserDocument): UserDetailsInterface {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
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

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
