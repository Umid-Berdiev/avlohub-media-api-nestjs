import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { LoggerMiddleware } from './common/middlewares/logger.middleware';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { LanguagesModule } from './languages/languages.module';
import { CountriesModule } from './countries/countries.module';
import { CastsModule } from './casts/casts.module';
import { GenresModule } from './genres/genres.module';
import { TagsModule } from './tags/tags.module';
import { RatingsModule } from './ratings/ratings.module';
import { TariffsModule } from './tariffs/tariffs.module';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { RepliesModule } from './replies/replies.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { ImagesModule } from './images/images.module';
import { LinksModule } from './links/links.module';
import { FilesModule } from './files/files.module';
import { DescriptionsModule } from './descriptions/descriptions.module';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { AnimationsModule } from './animations/animations.module';
import { SubtitlesModule } from './subtitles/subtitles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/avlohub_media_api_db'),
    UsersModule,
    RolesModule,
    AuthModule,
    CategoriesModule,
    LanguagesModule,
    CountriesModule,
    CastsModule,
    GenresModule,
    TagsModule,
    RatingsModule,
    TariffsModule,
    NewsModule,
    CommentsModule,
    RepliesModule,
    SpecialtiesModule,
    ImagesModule,
    LinksModule,
    FilesModule,
    DescriptionsModule,
    MoviesModule,
    SeriesModule,
    AnimationsModule,
    SubtitlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
