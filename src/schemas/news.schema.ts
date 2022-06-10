import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Image } from './image.schema';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true })
  name: () => {
    uz: string;
    ru: string;
    en: string;
  };

  @Prop({ required: true })
  description: () => {
    uz: Text;
    ru: Text;
    en: Text;
  };

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Image' }])
  tags: Image[];

  // @Prop([{ type: SchemaTypes.ObjectId, ref:"Tag" }])
  // tags: Tag[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
