import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailStandardComponent } from './profile-detail-standard.component';

describe('ProfileDetailStandardComponent', () => {
  let component: ProfileDetailStandardComponent;
  let fixture: ComponentFixture<ProfileDetailStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
