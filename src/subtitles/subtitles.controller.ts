import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubtitlesService } from './subtitles.service';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Controller('subtitles')
export class SubtitlesController {
  constructor(private readonly subtitlesService: SubtitlesService) {}

  @Post()
  create(@Body() createSubtitleDto: CreateSubtitleDto) {
    return this.subtitlesService.create(createSubtitleDto);
  }

  @Get()
  findAll() {
    return this.subtitlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtitlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubtitleDto: UpdateSubtitleDto) {
    return this.subtitlesService.update(+id, updateSubtitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtitlesService.remove(+id);
  }
}
