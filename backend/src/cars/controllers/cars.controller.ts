import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarsService } from '../services/cars.service';

@Controller('cars')
export class CarsController {

    constructor(private carService: CarsService){}

    @Get()
    getCars(){
        return this.carService.getCars();
    }

    @Post()
    addCar(@Body() body:any){
        return this.carService.addCar(body);
    }

    @Put(':id')
    updateCar(@Param('id') id: number, @Body() body: any){
        return this.carService.updateCar(id, body);     
    }

    @Delete(':id')
    deleteCar(@Param('id') id: number){
        return this.carService.deleteCar(id);
    }
}
