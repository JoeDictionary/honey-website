import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunPresentsComponent } from './fun-presents.component';

describe('FunPresentsComponent', () => {
  let component: FunPresentsComponent;
  let fixture: ComponentFixture<FunPresentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunPresentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunPresentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
