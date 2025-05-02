import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { ApplicationResponseDto } from './dto/application-response.dto';
import { CreateApplicationsDto } from './dto/create-application.dto';

@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все заявки' })
  @ApiResponse({ status: 200, description: 'Список заявок', type: [ApplicationResponseDto] })
  async getAll() {
    return this.applicationsService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateApplicationsDto) {
    return this.applicationsService.create(dto);
  }
}
