import { Module } from '@nestjs/common';
import { MongooseModule, Prop } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { Image } from 'src/schemas/image.schema';
import { Role } from 'src/schemas/role.schema';
import { UserSchema } from 'src/schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  exports: [UsersService],
})
export class UsersModule {
  // one to many
  @Prop({ type: Schema.Types.ObjectId, ref: 'Image' })
  avatar: [Image];

  // many to many
  @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'Role' }] })
  roles: Role[];
}
