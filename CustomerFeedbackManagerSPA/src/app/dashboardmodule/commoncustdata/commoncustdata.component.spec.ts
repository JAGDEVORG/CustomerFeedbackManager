import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncustdataComponent } from './commoncustdata.component';

describe('CommoncustdataComponent', () => {
  let component: CommoncustdataComponent;
  let fixture: ComponentFixture<CommoncustdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoncustdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoncustdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
