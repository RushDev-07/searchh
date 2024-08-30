// src/search/search.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BuilderSearch } from '../interfaces/builder-search.interface';
import { Project } from '../interfaces/project.interface';

@Processor('search-queue')
export class SearchProcessor {
  constructor(
    @InjectModel('BuilderSearch') private readonly builderSearchModel: Model<BuilderSearch>,
  ) {}

  @Process('saveProject')
  async handleSaveProject(job: Job<{ project: Project; brokerId: string; brokerName: string }>) {
    const { project, brokerId, brokerName } = job.data;

    const builderSearch: BuilderSearch = {
      id: project.id,
      builderId: project.builderId,
      builderName: project.builderName,
      projectId: project.id,
      projectName: project.name,
      projectRera: project.rera,
      brokerId: brokerId,
      brokerName: brokerName,
      brokerRera: '', // Assuming you get this information from somewhere else or leave it empty
      _createdDate: new Date().toISOString(),
      _updatedDate: new Date().toISOString(),
    };

    await this.builderSearchModel.create(builderSearch);
  }
}
