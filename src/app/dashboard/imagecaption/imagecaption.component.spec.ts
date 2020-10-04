import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecaptionComponent } from './imagecaption.component';

describe('ImagecaptionComponent', () => {
  let component: ImagecaptionComponent;
  let fixture: ComponentFixture<ImagecaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
