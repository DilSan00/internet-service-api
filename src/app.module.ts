import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InternetsModule } from './internets/internets.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    InternetsModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb://localhost:27017/?authMechanism=DEFAULT',
    ),
  ],
})
export class AppModule {}
