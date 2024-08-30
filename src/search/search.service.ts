// src/search/search.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Project } from '../interfaces/project.interface';

@Injectable()
export class SearchService {
  constructor(
    @InjectQueue('search-queue') private readonly searchQueue: Queue,  // Ensure the queue name matches
  ) {}

  async queueSearchResults(results: Project[], brokerId: string, brokerName: string) {
    for (const project of results) {
      if (project.builderId) {
        await this.searchQueue.add('saveProject', { project, brokerId, brokerName });
      }
    }
  }
}
