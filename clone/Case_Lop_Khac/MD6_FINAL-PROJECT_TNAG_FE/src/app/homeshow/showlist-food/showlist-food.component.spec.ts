import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistFoodComponent } from './showlist-food.component';

describe('ShowlistFoodComponent', () => {
  let component: ShowlistFoodComponent;
  let fixture: ComponentFixture<ShowlistFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlistFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowlistFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
