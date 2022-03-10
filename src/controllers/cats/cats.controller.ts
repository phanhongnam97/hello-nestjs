import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'This action adds new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
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
