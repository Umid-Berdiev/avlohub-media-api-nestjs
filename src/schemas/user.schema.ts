import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Tariff } from './tariff.schema';
import { Image } from 'src/schemas/image.schema';
import { Role } from 'src/schemas/role.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  uuid: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 0 })
  balance: number;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Tariff' })
  tariff: Tariff;

  // one to many
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Image' })
  avatar: [Image];

  // many to many
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Role' }] })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
