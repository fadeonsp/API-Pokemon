import { TestBed } from '@angular/core/testing';

import { PokemoesService } from './pokemoes.service';

describe('PokemoesService', () => {
  let service: PokemoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
