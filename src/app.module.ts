import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://norms777666:<smodsmod>@cluster0.yvcttep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class AppModule {}
