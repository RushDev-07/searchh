// src/search/search.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { SearchProcessor } from './search.processor';
import { MongooseModule } from '@nestjs/mongoose';
import { BuilderSearchSchema } from '../schemas/builder-search.schema';

@Module({
  imports: [
    // Register the Bull queue
    BullModule.registerQueue({
      name: 'search-queue',  // The name should match the queue name used in the service
    }),
    // Register the Mongoose schema
    MongooseModule.forFeature([{ name: 'BuilderSearch', schema: BuilderSearchSchema }]),
  ],
  controllers: [SearchController],
  providers: [SearchService, SearchProcessor],
})
export class SearchModule {}
