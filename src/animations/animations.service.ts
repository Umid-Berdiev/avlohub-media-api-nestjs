import { Injectable } from '@nestjs/common';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { UpdateAnimationDto } from './dto/update-animation.dto';

@Injectable()
export class AnimationsService {
  create(createAnimationDto: CreateAnimationDto) {
    return 'This action adds a new animation';
  }

  findAll() {
    return `This action returns all animations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animation`;
  }

  update(id: number, updateAnimationDto: UpdateAnimationDto) {
    return `This action updates a #${id} animation`;
  }

  remove(id: number) {
    return `This action removes a #${id} animation`;
  }
}
