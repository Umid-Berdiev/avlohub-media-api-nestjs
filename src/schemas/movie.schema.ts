import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({ timestamps: true })
export class Movie {
  @Prop({ required: true })
  title: () => {
    uz: string;
    ru: string;
    en: string;
  };

  @Prop({ required: true })
  original_title: string;

  @Prop({ default: 0 })
  age_limit: number;

  @Prop()
  budget: number;

  @Prop({ min: 1900 })
  release_year: number;

  @Prop()
  duration: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
