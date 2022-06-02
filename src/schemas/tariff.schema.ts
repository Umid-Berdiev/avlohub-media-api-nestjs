import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TariffDocument = Tariff & Document;

@Schema({ timestamps: true })
export class Tariff {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  duration: number;
}

export const TariffSchema = SchemaFactory.createForClass(Tariff);
