import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WorktimeDocument = Worktime & Document;

@Schema({ collection: 'worktime' })
export class Worktime {
  @Prop({ type: Types.ObjectId, ref: 'Employee' }) empId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Shift' }) shiftId: Types.ObjectId;
  @Prop({ required: true }) workDate: Date;
  @Prop({ default: '0' }) lateMinutes: string;
  @Prop({ default: '0' }) overtimeMinutes: string;
  @Prop({ default: '0' }) workHours: string;
  @Prop() consomation: number;
  @Prop({ default: 0 }) penalty: number;
  @Prop({ default: false }) absent: boolean;
  @Prop() absentComment: string;
}

export const WorktimeSchema = SchemaFactory.createForClass(Worktime);