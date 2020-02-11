import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientLogoComponent } from './home-client-logo.component';

describe('HomeClientLogoComponent', () => {
  let component: HomeClientLogoComponent;
  let fixture: ComponentFixture<HomeClientLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClientLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
