import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    ApplicationsModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://norms777666:smodsmod@cluster0.yvcttep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
  ],
})
export class AppModule {}
