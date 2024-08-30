// src/search/search.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SearchService } from './search.service';
import { Project } from '../interfaces/project.interface';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async queueSearchResults(
    @Body() body: { results: Project[]; brokerId: string; brokerName: string },
  ) {
    await this.searchService.queueSearchResults(body.results, body.brokerId, body.brokerName);
    return { message: 'Search results queued successfully' };
  }
}
