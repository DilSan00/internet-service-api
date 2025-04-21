import { Module } from '@nestjs/common';
import { InternetsController } from './internets.controller';
import { InternetsService } from './internets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Internet, InternetSchema } from './schemas/internets.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Internet.name,
        schema: InternetSchema,
      },
    ]),
  ],
  controllers: [InternetsController],
  providers: [InternetsService],
})
export class InternetsModule {}
