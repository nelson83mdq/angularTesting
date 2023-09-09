import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametricComponent } from './parametric.component';

describe('ParametricComponent', () => {
  let component: ParametricComponent;
  let fixture: ComponentFixture<ParametricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametricComponent]
    });
    fixture = TestBed.createComponent(ParametricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
