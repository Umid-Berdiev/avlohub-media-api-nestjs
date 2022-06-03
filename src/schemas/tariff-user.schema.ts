import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TariffUserDocument = TariffUser & Document;

@Schema({ timestamps: true })
export class TariffUser {
  @Prop({ required: true, unique: true })
  user_id: string;

  @Prop({ required: true })
  tariff_id: number;

  @Prop({ required: true })
  deadline: string;
}

export const TariffUserSchema = SchemaFactory.createForClass(TariffUser);
