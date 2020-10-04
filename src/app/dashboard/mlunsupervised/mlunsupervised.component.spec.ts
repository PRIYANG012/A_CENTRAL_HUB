import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLunsupervisedComponent } from './mlunsupervised.component';

describe('MLunsupervisedComponent', () => {
  let component: MLunsupervisedComponent;
  let fixture: ComponentFixture<MLunsupervisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLunsupervisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLunsupervisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
