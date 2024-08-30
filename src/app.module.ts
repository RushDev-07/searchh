// src/app.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rushgone:12345@cluster4.144sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4'),
    // Global Bull configuration
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    // Other modules
    SearchModule,
  ],
})
export class AppModule {}
