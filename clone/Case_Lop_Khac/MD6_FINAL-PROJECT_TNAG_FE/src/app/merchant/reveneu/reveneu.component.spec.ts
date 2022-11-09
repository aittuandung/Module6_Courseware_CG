import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveneuComponent } from './reveneu.component';

describe('ReveneuComponent', () => {
  let component: ReveneuComponent;
  let fixture: ComponentFixture<ReveneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReveneuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReveneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
