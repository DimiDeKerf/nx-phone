import { Injectable } from '@angular/core';
import { Phone } from '@nx-phone/model';
import { Observable } from 'rxjs';
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
