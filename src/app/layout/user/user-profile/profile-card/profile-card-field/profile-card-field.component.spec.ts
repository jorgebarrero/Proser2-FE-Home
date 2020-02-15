import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardFieldComponent } from './profile-card-field.component';

describe('ProfileCardFieldComponent', () => {
  let component: ProfileCardFieldComponent;
  let fixture: ComponentFixture<ProfileCardFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
