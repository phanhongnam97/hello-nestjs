import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return Promise.resolve(this.catsService.findAll());
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): string {
    return `This action returns a ${id} cat`;
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): string {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}
