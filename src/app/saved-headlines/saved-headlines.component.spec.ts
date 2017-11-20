import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedHeadlinesComponent } from './saved-headlines.component';

describe('SavedHeadlinesComponent', () => {
  let component: SavedHeadlinesComponent;
  let fixture: ComponentFixture<SavedHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
