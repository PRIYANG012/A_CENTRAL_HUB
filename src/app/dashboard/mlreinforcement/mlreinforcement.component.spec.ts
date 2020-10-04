import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLreinforcementComponent } from './mlreinforcement.component';

describe('MLreinforcementComponent', () => {
  let component: MLreinforcementComponent;
  let fixture: ComponentFixture<MLreinforcementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLreinforcementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLreinforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
