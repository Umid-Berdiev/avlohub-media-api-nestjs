import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Tariff } from './tariff.schema';

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
}

export const UserSchema = SchemaFactory.createForClass(User);
