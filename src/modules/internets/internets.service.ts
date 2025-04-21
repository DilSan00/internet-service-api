import { InjectModel } from '@nestjs/mongoose';
import { Internet, InternetDocument } from './schemas/internets.schema';
import { Model } from 'mongoose';
import { CreateInternetDto } from './dto/create-internet.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InternetsService {
  constructor(@InjectModel(Internet.name) private internetModel: Model<InternetDocument>) {}

  async create(dto: CreateInternetDto): Promise<InternetDocument> {
    const createdInternet = new this.internetModel(dto);
    return createdInternet.save();
  }

  async findAll(): Promise<InternetDocument[]> {
    return this.internetModel.find().exec();
  }

  async findById(id: string): Promise<InternetDocument | null> {
    return this.internetModel.findById(id).exec();
  }
}
