import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundclassificationComponent } from './soundclassification.component';

describe('SoundclassificationComponent', () => {
  let component: SoundclassificationComponent;
  let fixture: ComponentFixture<SoundclassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundclassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundclassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
