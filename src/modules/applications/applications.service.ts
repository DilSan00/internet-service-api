import { Injectable } from '@nestjs/common';
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
    const createdApplication = new this.applicationModel(dto);
    return createdApplication.save();
  }

  async findAll(): Promise<ApplicationDocument[]> {
    return this.applicationModel.find().exec();
  }
}
