import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllowSellerListComponent } from './not-allow-seller-list.component';

describe('NotAllowSellerListComponent', () => {
  let component: NotAllowSellerListComponent;
  let fixture: ComponentFixture<NotAllowSellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAllowSellerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAllowSellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
