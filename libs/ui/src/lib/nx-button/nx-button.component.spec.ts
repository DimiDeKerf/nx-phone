import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxButtonComponent } from './nx-button.component';

describe('NxButtonComponent', () => {
  let component: NxButtonComponent;
  let fixture: ComponentFixture<NxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
