import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionNameComponent } from './header-section-name.component';

describe('HeaderSectionNameComponent', () => {
  let component: HeaderSectionNameComponent;
  let fixture: ComponentFixture<HeaderSectionNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSectionNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
