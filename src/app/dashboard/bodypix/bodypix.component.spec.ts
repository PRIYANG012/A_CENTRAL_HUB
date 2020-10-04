import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodypixComponent } from './bodypix.component';

describe('BodypixComponent', () => {
  let component: BodypixComponent;
  let fixture: ComponentFixture<BodypixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodypixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodypixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
