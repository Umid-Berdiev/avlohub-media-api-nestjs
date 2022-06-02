import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  title?: { uz: string; ru: string; en: string };
  original_title?: string;
  age_limit?: number;
  budget?: number;
  release_year?: number;
}
