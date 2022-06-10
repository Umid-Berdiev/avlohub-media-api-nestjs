import { Image } from 'src/schemas/image.schema';

export class CreateNewsDto {
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  images: Image[];
  views: 0;
  rating: 0;
}
