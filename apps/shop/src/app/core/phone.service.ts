import { Injectable } from '@angular/core';
import { Phone } from '../model/phone';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Phone[]> {
    return this.http.get<Phone[]>('/api/phones');
  }
}
