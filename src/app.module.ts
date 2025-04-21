import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { InternetsModule } from './modules/internets/internets.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    InternetsModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://norms777666:smodsmod@cluster0.yvcttep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class AppModule {}
