import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimationDto } from './create-animation.dto';

export class UpdateAnimationDto extends PartialType(CreateAnimationDto) {}
