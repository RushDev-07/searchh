// src/schemas/builder-search.schema.ts
import { Schema } from 'mongoose';

export const BuilderSearchSchema = new Schema({
  builderId: { type: String, required: true },
  builderName: { type: String, required: true },
  projectId: { type: String, required: true },
  projectName: { type: String, required: true },
  projectRera: { type: String, required: true },
  brokerId: { type: String, required: true },
  brokerName: { type: String, required: true },
  brokerRera: { type: String, default: '' },
  _createdDate: { type: Date, default: Date.now },
  _updatedDate: { type: Date, default: Date.now },
});
