import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../core/phone.service';
import { Phone } from '@nx-phone/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-phone-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  phones$: Observable<Phone[]>;

  constructor(
    private phoneService: PhoneService,
  ) { }

  ngOnInit() {
    this.phones$ = this.phoneService.get();
  }

}
