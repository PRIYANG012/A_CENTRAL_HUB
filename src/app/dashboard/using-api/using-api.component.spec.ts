import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAPIComponent } from './using-api.component';

describe('UsingAPIComponent', () => {
  let component: UsingAPIComponent;
  let fixture: ComponentFixture<UsingAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
