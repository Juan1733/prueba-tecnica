import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getCars() {
    return 'Cars returned!';
  }

  addCar(car: any) {
    return 'Car added!';
  }

  deleteCar() {
    return 'Car deleted!';
  }

}
