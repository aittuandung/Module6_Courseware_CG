import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrderUserComponent } from './pre-order-user.component';

describe('PreOrderUserComponent', () => {
  let component: PreOrderUserComponent;
  let fixture: ComponentFixture<PreOrderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreOrderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOrderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
