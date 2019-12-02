import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Phone } from '@nx-phone/model';

@Component({
  selector: 'nx-phone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  phones$: Observable<Phone[]>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.phones$ = this.http.get<Phone[]>('/api/phones');
  }
}
