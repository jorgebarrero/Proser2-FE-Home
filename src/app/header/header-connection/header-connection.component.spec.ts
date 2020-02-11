import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConnectionComponent } from './header-connection.component';

describe('HeaderConnectionComponent', () => {
  let component: HeaderConnectionComponent;
  let fixture: ComponentFixture<HeaderConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
