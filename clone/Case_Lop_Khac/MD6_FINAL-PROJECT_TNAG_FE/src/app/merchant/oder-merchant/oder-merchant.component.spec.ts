import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderMerchantComponent } from './oder-merchant.component';

describe('OderMerchantComponent', () => {
  let component: OderMerchantComponent;
  let fixture: ComponentFixture<OderMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
