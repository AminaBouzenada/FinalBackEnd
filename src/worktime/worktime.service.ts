import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worktime, WorktimeDocument } from './worktime.schema';

@Injectable()
export class WorktimeService {
  constructor(@InjectModel(Worktime.name) private worktimeModel: Model<WorktimeDocument>) {}

  async create(data: Partial<Worktime>): Promise<WorktimeDocument> {
    return this.worktimeModel.create(data);
  }

  async findAll(): Promise<WorktimeDocument[]> {
    return this.worktimeModel.find().populate('empId').populate('shiftId').exec();
  }

  async findOne(id: string): Promise<WorktimeDocument> {
    return this.worktimeModel.findById(id).populate('empId').populate('shiftId').exec();
  }

  async update(id: string, data: Partial<Worktime>): Promise<WorktimeDocument> {
    return this.worktimeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<WorktimeDocument> {
    return this.worktimeModel.findByIdAndDelete(id).exec();
  }
}