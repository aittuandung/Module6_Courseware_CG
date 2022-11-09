import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSellerAvatarComponent } from './edit-seller-avatar.component';

describe('EditSellerAvatarComponent', () => {
  let component: EditSellerAvatarComponent;
  let fixture: ComponentFixture<EditSellerAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSellerAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSellerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
