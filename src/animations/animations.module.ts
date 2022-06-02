import { Module } from '@nestjs/common';
import { AnimationsService } from './animations.service';
import { AnimationsController } from './animations.controller';

@Module({
  controllers: [AnimationsController],
  providers: [AnimationsService]
})
export class AnimationsModule {}
