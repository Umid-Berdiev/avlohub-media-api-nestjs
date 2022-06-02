import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DescriptionDocument = Description & Document;

@Schema({ timestamps: true })
export class Description {
  @Prop({ required: true })
  model_id: string;

  @Prop({ required: true })
  content: () => {
    uz: Text;
    ru: Text;
    en: Text;
  };

  @Prop({ required: true })
  synopsis: () => {
    uz: Text;
    ru: Text;
    en: Text;
  };
}

export const DescriptionSchema = SchemaFactory.createForClass(Description);
