import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcartUserComponent } from './listcart-user.component';

describe('ListcartUserComponent', () => {
  let component: ListcartUserComponent;
  let fixture: ComponentFixture<ListcartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcartUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
