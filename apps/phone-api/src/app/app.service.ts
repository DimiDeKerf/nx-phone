import { Injectable } from '@nestjs/common';
import { Phone } from '@nx-phone/model';

@Injectable()
export class PhoneService {

  private readonly phones: Phone[] = [
    {
      id: 1,
      name: 'NXPro',
      price: 1000,
      stock: 2,
    }, {
      id: 2,
      name: 'NXs',
      price: 900,
      stock: 5,
    }, {
      id: 3,
      name: 'NXr',
      price: 800,
      stock: 0,
    }, {
      id: 4,
      name: 'NX 1',
      price: 700,
      stock: 1,
    },
  ];

  getData(): Phone[] {
    return this.phones;
  }
}
