import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSchema } from 'src/schemas/language.schema';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService],
  imports: [
    MongooseModule.forFeature([{ name: 'Language', schema: LanguageSchema }]),
  ],
  exports: [LanguagesService],
})
export class LanguagesModule {}
