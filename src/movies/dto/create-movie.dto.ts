export class CreateMovieDto {
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  original_title: string;
  age_limit: number;
  budget: number;
  release_year: number;
}
