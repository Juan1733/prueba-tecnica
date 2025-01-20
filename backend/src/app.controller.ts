import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/cars')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCars() {
    return this.appService.getCars();
  }

  @Post()
  addCar(@Body() car: any) {
    return this.appService.addCar(car);
  }

  @Delete('/:id')
  deleteCar(@Param('id') id: string) {
    return this.appService.deleteCar();
  }

}
