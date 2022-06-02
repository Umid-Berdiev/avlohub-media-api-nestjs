import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
  name?: { uz: string; ru: string; en: string };
  slug?: string;
}
