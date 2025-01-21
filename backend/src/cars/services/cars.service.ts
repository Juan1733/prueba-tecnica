import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';

@Injectable()
export class CarsService {

    constructor(
        @InjectRepository(Car)
        private carRepo: Repository<Car>
    ){}

    getCars(){
        return this.carRepo.find();
    }

    addCar(body: any){
        const newCar = this.carRepo.create(body);
        return this.carRepo.save(newCar);
    }

    async updateCar(id: number, body: any){
        const car = await this.carRepo.findOne({ where: { id: id } });
        this.carRepo.merge(car, body);
        return this.carRepo.save(car);
    }

    async deleteCar(id: number){
        await this.carRepo.delete(id);
        return true;
    }
}
