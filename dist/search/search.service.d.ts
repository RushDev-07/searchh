import { Queue } from 'bull';
import { Project } from '../interfaces/project.interface';
export declare class SearchService {
    private readonly searchQueue;
    constructor(searchQueue: Queue);
    queueSearchResults(results: Project[], brokerId: string, brokerName: string): Promise<void>;
}
