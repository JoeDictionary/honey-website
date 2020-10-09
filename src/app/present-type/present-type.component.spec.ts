import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTypeComponent } from './present-type.component';

describe('PresentTypeComponent', () => {
  let component: PresentTypeComponent;
  let fixture: ComponentFixture<PresentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
