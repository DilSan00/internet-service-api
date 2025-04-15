import { ApiTags } from '@nestjs/swagger';
import { InternetsService } from './internets.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateInternetDto } from './dto/create-internet.dto';

@ApiTags('Internets')
@Controller('internets')
export class InternetsController {
  constructor(private readonly internetsService: InternetsService) {}

  @Get()
  async getAll() {
    return this.internetsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.internetsService.findById(id);
  }

  @Post()
  async create(@Body() dto: CreateInternetDto) {
    return this.internetsService.create(dto);
  }
}
