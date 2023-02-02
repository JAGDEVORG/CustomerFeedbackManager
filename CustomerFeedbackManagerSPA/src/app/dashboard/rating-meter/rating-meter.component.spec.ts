import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMeterComponent } from './rating-meter.component';

describe('RatingMeterComponent', () => {
  let component: RatingMeterComponent;
  let fixture: ComponentFixture<RatingMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
