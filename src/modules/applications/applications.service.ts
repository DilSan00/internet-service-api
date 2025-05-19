import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApplicationDocument, Applications } from './schemas/applications.schema';
import { Model } from 'mongoose';
import { CreateApplicationsDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Applications.name) private applicationModel: Model<ApplicationDocument>
  ) {}

  async create(dto: CreateApplicationsDto): Promise<ApplicationDocument> {
    try {
      const createdApplication = new this.applicationModel(dto);
      return await createdApplication.save();
    } catch (error) {
      console.error('Error creating application:', error);
      throw new InternalServerErrorException('Failed to create application: ' + error.message);
    }
  }

  async findAll(): Promise<ApplicationDocument[]> {
    try {
      return await this.applicationModel.find().exec();
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw new InternalServerErrorException('Failed to fetch applications: ' + error.message);
    }
  }
}
