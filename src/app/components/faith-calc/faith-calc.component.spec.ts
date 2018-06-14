import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithCalcComponent } from './faith-calc.component';

describe('FaithCalcComponent', () => {
  let component: FaithCalcComponent;
  let fixture: ComponentFixture<FaithCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaithCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaithCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
