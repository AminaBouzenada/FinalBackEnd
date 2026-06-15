import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PlanningService } from './planning.service';
import { CreatePlanningDto } from '../planning/DTO/create-planning.dto';

@Controller('planning')
export class PlanningController {
  constructor(private readonly planningService: PlanningService) {}

  @Post('save')
  async savePlanning(@Body() body: { entries: CreatePlanningDto[] }) {
    return this.planningService.savePlanning(body.entries);
  }

  @Get('filter')
  async getByFilters(
    @Query('empId') empId: string,
    @Query('shiftId') shiftId: string,
    @Query('taskId') taskId: string,
  ){
    return this.planningService.getByFilters(empId, shiftId, parseInt(taskId));
  }

  @Get('getAll')
  async getAll() {
    return this.planningService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.planningService.getById(id);
  }
}