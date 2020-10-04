import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMAGECLASSIFICATIONMOBILEComponent } from './imageclassificationmobile.component';

describe('IMAGECLASSIFICATIONMOBILEComponent', () => {
  let component: IMAGECLASSIFICATIONMOBILEComponent;
  let fixture: ComponentFixture<IMAGECLASSIFICATIONMOBILEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMAGECLASSIFICATIONMOBILEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMAGECLASSIFICATIONMOBILEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
