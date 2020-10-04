import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosenetComponent } from './posenet.component';

describe('PosenetComponent', () => {
  let component: PosenetComponent;
  let fixture: ComponentFixture<PosenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
