import { TestBed } from '@angular/core/testing';

import { CreateNoteService } from './create-note.service';

describe('CreateNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateNoteService = TestBed.get(CreateNoteService);
    expect(service).toBeTruthy();
  });
});
