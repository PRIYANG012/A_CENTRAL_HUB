import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KNNComponent } from './knn.component';

describe('KNNComponent', () => {
  let component: KNNComponent;
  let fixture: ComponentFixture<KNNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KNNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
