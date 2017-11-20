import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveHeadlineComponent } from './save-headline.component';

describe('SaveHeadlineComponent', () => {
  let component: SaveHeadlineComponent;
  let fixture: ComponentFixture<SaveHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
