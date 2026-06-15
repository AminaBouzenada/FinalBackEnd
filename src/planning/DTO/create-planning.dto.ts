import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePlanningDto {
  @IsString()
  shiftId!: string;

  @IsString()
  empId!: string;

  @IsNumber()
  taskId!: number;

  @IsDateString()
  planDate!: Date;
}