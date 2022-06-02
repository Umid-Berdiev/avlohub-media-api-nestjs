import { Injectable } from '@nestjs/common';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';

@Injectable()
export class CastsService {
  create(createCastDto: CreateCastDto) {
    return 'This action adds a new cast';
  }

  findAll() {
    return `This action returns all casts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cast`;
  }

  update(id: number, updateCastDto: UpdateCastDto) {
    return `This action updates a #${id} cast`;
  }

  remove(id: number) {
    return `This action removes a #${id} cast`;
  }
}
