import { Job } from 'bull';
import { Model } from 'mongoose';
import { BuilderSearch } from '../interfaces/builder-search.interface';
import { Project } from '../interfaces/project.interface';
export declare class SearchProcessor {
    private readonly builderSearchModel;
    constructor(builderSearchModel: Model<BuilderSearch>);
    handleSaveProject(job: Job<{
        project: Project;
        brokerId: string;
        brokerName: string;
    }>): Promise<void>;
}
