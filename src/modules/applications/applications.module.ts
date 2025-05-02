import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Applications, ApplicationsSchema } from './schemas/applications.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Applications.name,
        schema: ApplicationsSchema,
      },
    ]),
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
