import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistRestaurantComponent } from './showlist-restaurant.component';

describe('ShowlistRestaurantComponent', () => {
  let component: ShowlistRestaurantComponent;
  let fixture: ComponentFixture<ShowlistRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlistRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowlistRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
