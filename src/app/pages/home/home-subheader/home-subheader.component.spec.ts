import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubheaderComponent } from './home-subheader.component';

describe('HomeSubheaderComponent', () => {
  let component: HomeSubheaderComponent;
  let fixture: ComponentFixture<HomeSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
