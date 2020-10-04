import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLsupervisedComponent } from './mlsupervised.component';

describe('MLsupervisedComponent', () => {
  let component: MLsupervisedComponent;
  let fixture: ComponentFixture<MLsupervisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLsupervisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLsupervisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
