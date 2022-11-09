import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomweUserComponent } from './homwe-user.component';

describe('HomweUserComponent', () => {
  let component: HomweUserComponent;
  let fixture: ComponentFixture<HomweUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomweUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomweUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
