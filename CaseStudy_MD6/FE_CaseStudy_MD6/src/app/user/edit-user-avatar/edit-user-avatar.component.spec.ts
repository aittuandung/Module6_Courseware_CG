import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserAvatarComponent } from './edit-user-avatar.component';

describe('EditUserAvatarComponent', () => {
  let component: EditUserAvatarComponent;
  let fixture: ComponentFixture<EditUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
