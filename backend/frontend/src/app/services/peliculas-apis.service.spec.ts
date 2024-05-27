import { TestBed } from '@angular/core/testing';

import { PeliculasApisService } from './peliculas-apis.service';

describe('PeliculasApisService', () => {
  let service: PeliculasApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
