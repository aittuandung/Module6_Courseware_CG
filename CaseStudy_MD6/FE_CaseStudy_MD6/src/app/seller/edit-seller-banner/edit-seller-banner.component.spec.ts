import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellerBannerComponent } from './edit-seller-banner.component';

describe('EditSellerBannerComponent', () => {
  let component: EditSellerBannerComponent;
  let fixture: ComponentFixture<EditSellerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSellerBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSellerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
