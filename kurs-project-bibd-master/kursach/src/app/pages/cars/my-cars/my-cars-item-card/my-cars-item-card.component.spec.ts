import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarsItemCardComponent } from './my-cars-item-card.component';

describe('MyCarsItemCardComponent', () => {
  let component: MyCarsItemCardComponent;
  let fixture: ComponentFixture<MyCarsItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCarsItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarsItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
