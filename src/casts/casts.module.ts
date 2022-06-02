import { Module } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CastsController } from './casts.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CastsController],
  providers: [CastsService],
  // imports: [MongooseModule.forFeature([{ name: 'Cast', schema: CastSchema }])],
  // exports: [CastsService],
})
export class CastsModule {}
