import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLStartedComponent } from './mlstarted.component';

describe('MLStartedComponent', () => {
  let component: MLStartedComponent;
  let fixture: ComponentFixture<MLStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
