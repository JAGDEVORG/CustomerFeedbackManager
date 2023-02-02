import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadwriteQrcodeComponent } from './readwrite-qrcode.component';

describe('ReadwriteQrcodeComponent', () => {
  let component: ReadwriteQrcodeComponent;
  let fixture: ComponentFixture<ReadwriteQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadwriteQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadwriteQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
