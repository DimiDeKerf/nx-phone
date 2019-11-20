import { Injectable } from '@angular/core';
import { Phone } from '../model/phone';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly phones: Phone[] = [
    {
      id: 1,
      name: 'NXPro',
      price: 1000,
    }, {
      id: 2,
      name: 'NXs',
      price: 900,
    }, {
      id: 3,
      name: 'NXr',
      price: 800,
    }, {
      id: 4,
      name: 'NX 1',
      price: 700,
    },
  ];

  constructor() { }

  get(): Observable<Phone[]> {
    return of(this.phones);
  }
}
