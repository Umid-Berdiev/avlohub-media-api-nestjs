import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';

@Controller('tariffs')
export class TariffsController {
  constructor(private readonly tariffsService: TariffsService) {}

  @Post()
  create(@Body() createTariffDto: CreateTariffDto) {
    return this.tariffsService.create(createTariffDto);
  }

  @Get()
  findAll() {
    return this.tariffsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tariffsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTariffDto: UpdateTariffDto) {
    return this.tariffsService.update(id, updateTariffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tariffsService.remove(id);
  }
}
