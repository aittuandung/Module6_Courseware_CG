import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSellerManagementComponent } from './detail-seller-management.component';

describe('DetailSellerManagementComponent', () => {
  let component: DetailSellerManagementComponent;
  let fixture: ComponentFixture<DetailSellerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSellerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSellerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
