import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantAvatarComponent } from './edit-merchant-avatar.component';

describe('EditMerchantAvatarComponent', () => {
  let component: EditMerchantAvatarComponent;
  let fixture: ComponentFixture<EditMerchantAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchantAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchantAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
