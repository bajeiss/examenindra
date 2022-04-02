import { TestBed } from '@angular/core/testing';

import { IngredientespopularesService } from './ingredientespopulares.service';

describe('IngredientespopularesService', () => {
  let service: IngredientespopularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientespopularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
