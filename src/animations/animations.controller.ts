import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimationsService } from './animations.service';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { UpdateAnimationDto } from './dto/update-animation.dto';

@Controller('animations')
export class AnimationsController {
  constructor(private readonly animationsService: AnimationsService) {}

  @Post()
  create(@Body() createAnimationDto: CreateAnimationDto) {
    return this.animationsService.create(createAnimationDto);
  }

  @Get()
  findAll() {
    return this.animationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimationDto: UpdateAnimationDto) {
    return this.animationsService.update(+id, updateAnimationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animationsService.remove(+id);
  }
}
