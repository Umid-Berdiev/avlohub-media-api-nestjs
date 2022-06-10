import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Image } from './image.schema';

export type NewsDocument = News & Document;

@Schema({ timestamps: true })
export class News {
  @Prop({ required: true })
  title: () => {
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
  images: Image[];

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: 0 })
  rating: number;

  // @Prop([{ type: SchemaTypes.ObjectId, ref:"Tag" }])
  // tags: Tag[];
}

export const NewsSchema = SchemaFactory.createForClass(News);
