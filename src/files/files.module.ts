import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from 'src/schemas/file.schema';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])],
  exports: [FilesService],
})
export class FilesModule {}
