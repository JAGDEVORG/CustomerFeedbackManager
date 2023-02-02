import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/header/header.component.spec.ts
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
========
import { ScanQrcodeComponent } from './scan-qrcode.component';

describe('ScanQrcodeComponent', () => {
  let component: ScanQrcodeComponent;
  let fixture: ComponentFixture<ScanQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanQrcodeComponent);
>>>>>>>> 6e103b60223ae7fad00b1a1d0ec225a3c307e0de:src/app/scan-qrcode/scan-qrcode.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
