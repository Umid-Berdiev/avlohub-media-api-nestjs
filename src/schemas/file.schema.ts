import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema({ timestamps: true })
export class File {
  @Prop({ required: true })
  model_id: string;

  @Prop({ required: true })
  path: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
