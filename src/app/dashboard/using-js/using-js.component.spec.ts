import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingJSComponent } from './using-js.component';

describe('UsingJSComponent', () => {
  let component: UsingJSComponent;
  let fixture: ComponentFixture<UsingJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
