import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanningDocument = Planning & Document;

@Schema({ collection: 'planning' })
export class Planning {
  @Prop({ required: true }) shiftId!: string;
  @Prop({ required: true }) empId!: string;
  @Prop({ required: true }) taskId!: number;
  @Prop({ required: true }) planDate!: Date;
  @Prop() customStartTime!: string;
  @Prop() customEndTime!: string;
}

export const PlanningSchema = SchemaFactory.createForClass(Planning); 