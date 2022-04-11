import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AnimesService } from './animes.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animesService.create(createAnimeDto);
  }

  @Get()
  @HttpCode(202)
  findAll() {
    return this.animesService.findAll();
  }

  @Get('/:year/:premiered')
  @HttpCode(202)
  findSeasonAll(
    @Param('year') year: string,
    @Param('premiered') premiered: string,
  ) {
    return this.animesService.findSeasonAll(year, premiered);
  }

  @Get('activeAiringAll/:value')
  @HttpCode(202)
  activeAiringAll(@Param('value') value: boolean) {
    return this.animesService.activeAiringAll(value);
  }

  @Get('activeAiringSeason/:year/:premiered/:value')
  @HttpCode(202)
  updateAll(
    @Param('year') year: string,
    @Param('premiered') premiered: string,
    @Param('value') value: boolean,
  ) {
    return this.animesService.activeAiringSeason(year, premiered, value);
  }

  @Get(':id')
  @HttpCode(202)
  findOne(@Param('id') id: string) {
    return this.animesService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateAnimeDto: UpdateAnimeDto) {
    return this.animesService.update(id, updateAnimeDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.animesService.remove(id);
  }
}
