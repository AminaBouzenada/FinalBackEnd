import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanningService } from './planning.service';
import { PlanningController } from './planning.controller';
import { Planning, PlanningSchema } from '../planning/planning.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Planning.name, schema: PlanningSchema }])],
  controllers: [PlanningController],
  providers: [PlanningService],
  exports: [PlanningService], 
})
export class PlanningModule {}