import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlistdataComponent } from './customerlistdata.component';

describe('CustomerlistdataComponent', () => {
  let component: CustomerlistdataComponent;
  let fixture: ComponentFixture<CustomerlistdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerlistdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerlistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
