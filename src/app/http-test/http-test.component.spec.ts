import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTestComponent } from './http-test.component';

describe('HttpTestComponent', () => {
  let component: HttpTestComponent;
  let fixture: ComponentFixture<HttpTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpTestComponent]
    });
    fixture = TestBed.createComponent(HttpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
