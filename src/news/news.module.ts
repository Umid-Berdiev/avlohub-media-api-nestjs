import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [MongooseModule.forFeature([{ name: 'News', schema: News }])],
  exports: [CategoriesService],
})
export class NewsModule {}
