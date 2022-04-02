import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientespopularesComponent } from './ingredientespopulares.component';

describe('IngredientespopularesComponent', () => {
  let component: IngredientespopularesComponent;
  let fixture: ComponentFixture<IngredientespopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientespopularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientespopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
