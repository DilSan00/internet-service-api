import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InternetsService } from './internets.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateInternetDto } from './dto/create-internet.dto';
import { InternetResponseDto } from './dto/internet-response.dto';

@ApiTags('Internets')
@Controller('internets')
export class InternetsController {
  constructor(private readonly internetsService: InternetsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все тарифы' })
  @ApiResponse({ status: 200, description: 'Список тарифов', type: [InternetResponseDto] })
  async getAll() {
    return this.internetsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить тариф по ID' })
  @ApiResponse({ status: 200, description: 'Список тарифов', type: InternetResponseDto })
  async getById(@Param('id') id: string) {
    return this.internetsService.findById(id);
  }

  @Get('tops')
  async getTopInternets(@Query('limit') limit = 4) {
    return this.internetsService.findTop(Number(limit));
  }

  @Post()
  async create(@Body() dto: CreateInternetDto) {
    return this.internetsService.create(dto);
  }
}
