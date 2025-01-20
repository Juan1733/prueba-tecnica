import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getCars() {
    return 'Cars returned!';
  }

  addCar() {
    return 'Car added!';
  }

  deleteCar() {
    return 'Car deleted!';
  }

}
