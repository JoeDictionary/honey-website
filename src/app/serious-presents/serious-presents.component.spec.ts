import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriousPresentsComponent } from './serious-presents.component';

describe('SeriousPresentsComponent', () => {
  let component: SeriousPresentsComponent;
  let fixture: ComponentFixture<SeriousPresentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriousPresentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriousPresentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
