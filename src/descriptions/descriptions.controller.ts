import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DescriptionsService } from './descriptions.service';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';

@Controller('descriptions')
export class DescriptionsController {
  constructor(private readonly descriptionsService: DescriptionsService) {}

  @Post()
  create(@Body() createDescriptionDto: CreateDescriptionDto) {
    return this.descriptionsService.create(createDescriptionDto);
  }

  @Get()
  findAll() {
    return this.descriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDescriptionDto: UpdateDescriptionDto,
  ) {
    return this.descriptionsService.update(id, updateDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionsService.remove(id);
  }
}
