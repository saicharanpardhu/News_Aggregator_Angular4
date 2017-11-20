import { TestBed, inject } from '@angular/core/testing';

import { SpringHeadlineService } from './spring-headline.service';

describe('SpringHeadlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpringHeadlineService]
    });
  });

  it('should be created', inject([SpringHeadlineService], (service: SpringHeadlineService) => {
    expect(service).toBeTruthy();
  }));
});
