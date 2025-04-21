import { InjectModel } from '@nestjs/mongoose';
import { Internet, InternetDocument } from './schemas/internets.schema';
import { Model } from 'mongoose';
import { CreateInternetDto } from './dto/create-internet.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InternetsService {
  constructor(
    @InjectModel(Internet.name) private internetModel: Model<InternetDocument>,
  ) {}

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

  async findTop(limit: number): Promise<(Internet & { score: number })[]> {
    const internets = await this.internetModel.find().exec();

    const scored = internets.map((internet) => {
      const { speed, latency, price } = internet;

      const score = speed / price - latency * 0.1;

      return {
        ...internet.toObject(),
        score: parseFloat(score.toFixed(2)),
      };
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, limit);
  }
}
