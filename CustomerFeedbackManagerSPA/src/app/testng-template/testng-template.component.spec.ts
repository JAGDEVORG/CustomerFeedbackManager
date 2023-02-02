import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngTemplateComponent } from './testng-template.component';

describe('TestngTemplateComponent', () => {
  let component: TestngTemplateComponent;
  let fixture: ComponentFixture<TestngTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestngTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestngTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
