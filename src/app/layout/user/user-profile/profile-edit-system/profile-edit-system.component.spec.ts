import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditSystemComponent } from './profile-edit-system.component';

describe('ProfileEditSystemComponent', () => {
  let component: ProfileEditSystemComponent;
  let fixture: ComponentFixture<ProfileEditSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
