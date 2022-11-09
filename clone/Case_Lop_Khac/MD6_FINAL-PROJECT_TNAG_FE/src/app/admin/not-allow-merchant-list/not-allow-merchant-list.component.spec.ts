import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllowMerchantListComponent } from './not-allow-merchant-list.component';

describe('NotAllowMerchantListComponent', () => {
  let component: NotAllowMerchantListComponent;
  let fixture: ComponentFixture<NotAllowMerchantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAllowMerchantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAllowMerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
