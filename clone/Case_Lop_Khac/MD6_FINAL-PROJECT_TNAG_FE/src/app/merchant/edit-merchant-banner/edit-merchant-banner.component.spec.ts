import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantBannerComponent } from './edit-merchant-banner.component';

describe('EditMerchantBannerComponent', () => {
  let component: EditMerchantBannerComponent;
  let fixture: ComponentFixture<EditMerchantBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchantBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
