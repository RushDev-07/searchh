import { SearchService } from './search.service';
import { Project } from '../interfaces/project.interface';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    queueSearchResults(body: {
        results: Project[];
        brokerId: string;
        brokerName: string;
    }): Promise<{
        message: string;
    }>;
}
