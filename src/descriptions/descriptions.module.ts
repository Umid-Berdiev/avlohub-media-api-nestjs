import { Module } from '@nestjs/common';
import { DescriptionsService } from './descriptions.service';
import { DescriptionsController } from './descriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DescriptionSchema } from 'src/schemas/description.schema';

@Module({
  controllers: [DescriptionsController],
  providers: [DescriptionsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Description', schema: DescriptionSchema },
    ]),
  ],
  exports: [DescriptionsService],
})
export class DescriptionsModule {}
