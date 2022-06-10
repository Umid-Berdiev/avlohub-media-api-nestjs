import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsSchema } from 'src/schemas/news.schema';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [MongooseModule.forFeature([{ name: 'News', schema: NewsSchema }])],
  exports: [NewsService],
})
export class NewsModule {}
