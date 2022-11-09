import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingAcceptSellerComponent } from './waiting-accept-seller.component';

describe('WaitingAcceptSellerComponent', () => {
  let component: WaitingAcceptSellerComponent;
  let fixture: ComponentFixture<WaitingAcceptSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingAcceptSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingAcceptSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
