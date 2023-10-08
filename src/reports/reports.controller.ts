import { Controller, Post, Body } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';

import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/gaurds/auth.guard';
import { User } from 'src/users/user.entity';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}
  @Post()
  @UseGuards(AuthGuard)
  createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
    return this.reportService.create(body, user);
  }
}
