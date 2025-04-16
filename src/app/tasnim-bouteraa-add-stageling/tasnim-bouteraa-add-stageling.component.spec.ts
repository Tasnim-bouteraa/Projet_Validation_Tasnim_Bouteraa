import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasnimBouteraaAddStagelingComponent } from './tasnim-bouteraa-add-stageling.component';

describe('TasnimBouteraaAddStagelingComponent', () => {
  let component: TasnimBouteraaAddStagelingComponent;
  let fixture: ComponentFixture<TasnimBouteraaAddStagelingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasnimBouteraaAddStagelingComponent]
    });
    fixture = TestBed.createComponent(TasnimBouteraaAddStagelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
