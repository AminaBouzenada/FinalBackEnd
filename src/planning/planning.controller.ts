import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PlanningService } from './planning.service';

@Controller('planning')
export class PlanningController {
  constructor(private readonly planningService: PlanningService) {}

  @Post() create(@Body() body: any) { return this.planningService.create(body); }
  @Get() findAll() { return this.planningService.findAll(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.planningService.findOne(id); }
  @Put(':id') update(@Param('id') id: string, @Body() body: any) { return this.planningService.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.planningService.remove(id); }
}