import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavasideComponent } from './navaside.component';

describe('NavasideComponent', () => {
  let component: NavasideComponent;
  let fixture: ComponentFixture<NavasideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavasideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
