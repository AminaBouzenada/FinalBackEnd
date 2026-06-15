import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Planning, PlanningDocument } from '../planning/planning.shema'; // ← ton fichier s'appelle .shema
import { CreatePlanningDto } from '../planning/DTO/create-planning.dto'; // ← ajoute cet import

@Injectable()
export class PlanningService {
  constructor(@InjectModel(Planning.name) private planningModel: Model<PlanningDocument>) {}

  async savePlanning(entries: CreatePlanningDto[]) {
    try {
      console.log('Saving entries:', entries);
      const result = await this.planningModel.insertMany(entries);
      console.log('Saved result:', result);
      return result;
    } catch (error) {
      console.error('Error saving planning:', error);
      throw error;
    }
  }

  async getAll(): Promise<PlanningDocument[]> {
    return this.planningModel.find().populate('shiftId').populate('empId').exec();
  }

  async getById(id: string): Promise<PlanningDocument | null> {
    return this.planningModel.findById(id).populate('shiftId').populate('empId').exec();
  }

  async getByFilters(empId: string, shiftId: string, taskId: number): Promise<PlanningDocument[]> {
    return this.planningModel
      .find({ empId, shiftId, taskId })
      .populate('shiftId')
      .populate('empId')
      .exec();
  }

}