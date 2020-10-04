import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralnetcolorComponent } from './neuralnetcolor.component';

describe('NeuralnetcolorComponent', () => {
  let component: NeuralnetcolorComponent;
  let fixture: ComponentFixture<NeuralnetcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralnetcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralnetcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
