import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailReactiveComponent } from './profile-detail-reactive.component';

describe('ProfileDetailReactiveComponent', () => {
  let component: ProfileDetailReactiveComponent;
  let fixture: ComponentFixture<ProfileDetailReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
