import { PartialType } from '@nestjs/mapped-types';
import { CreateDescriptionDto } from './create-description.dto';

export class UpdateDescriptionDto extends PartialType(CreateDescriptionDto) {}
