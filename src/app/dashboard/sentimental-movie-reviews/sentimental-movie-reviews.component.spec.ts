import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentalMovieReviewsComponent } from './sentimental-movie-reviews.component';

describe('SentimentalMovieReviewsComponent', () => {
  let component: SentimentalMovieReviewsComponent;
  let fixture: ComponentFixture<SentimentalMovieReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentimentalMovieReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentalMovieReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
