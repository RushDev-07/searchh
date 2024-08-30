import { Schema } from 'mongoose';
export declare const BuilderSearchSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    brokerId: string;
    brokerName: string;
    builderId: string;
    builderName: string;
    projectId: string;
    projectName: string;
    projectRera: string;
    brokerRera: string;
    _createdDate: Date;
    _updatedDate: Date;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    brokerId: string;
    brokerName: string;
    builderId: string;
    builderName: string;
    projectId: string;
    projectName: string;
    projectRera: string;
    brokerRera: string;
    _createdDate: Date;
    _updatedDate: Date;
}>> & import("mongoose").FlatRecord<{
    brokerId: string;
    brokerName: string;
    builderId: string;
    builderName: string;
    projectId: string;
    projectName: string;
    projectRera: string;
    brokerRera: string;
    _createdDate: Date;
    _updatedDate: Date;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
