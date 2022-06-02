import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImageSchema } from 'src/schemas/image.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [
    MongooseModule.forFeature([{ name: 'Image', schema: ImageSchema }]),
  ],
  exports: [ImagesService],
})
export class ImagesModule {}
