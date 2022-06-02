import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ required: true })
  model_id: string;

  @Prop({ required: true })
  path: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
