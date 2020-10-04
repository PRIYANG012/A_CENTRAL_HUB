import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Word2VectextComponent } from './word2-vectext.component';

describe('Word2VectextComponent', () => {
  let component: Word2VectextComponent;
  let fixture: ComponentFixture<Word2VectextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Word2VectextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Word2VectextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
