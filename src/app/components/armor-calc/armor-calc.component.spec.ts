import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorCalcComponent } from './armor-calc.component';

describe('ArmorCalcComponent', () => {
  let component: ArmorCalcComponent;
  let fixture: ComponentFixture<ArmorCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
