import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LanguageDocument = Language & Document;

@Schema({ timestamps: true })
export class Language {
  @Prop({ required: true })
  name: () => {
    uz: string;
    ru: string;
    en: string;
  };

  @Prop({ required: true, unique: true })
  slug: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
