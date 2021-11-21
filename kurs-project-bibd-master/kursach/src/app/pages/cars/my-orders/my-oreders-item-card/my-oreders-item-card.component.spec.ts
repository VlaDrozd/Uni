import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOredersItemCardComponent } from './my-oreders-item-card.component';

describe('MyOredersItemCardComponent', () => {
  let component: MyOredersItemCardComponent;
  let fixture: ComponentFixture<MyOredersItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOredersItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOredersItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
