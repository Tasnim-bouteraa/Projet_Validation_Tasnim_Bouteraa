import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasnimBouteraaStagesIngComponent } from './tasnim-bouteraa-stages-ing.component';

describe('TasnimBouteraaStagesIngComponent', () => {
  let component: TasnimBouteraaStagesIngComponent;
  let fixture: ComponentFixture<TasnimBouteraaStagesIngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasnimBouteraaStagesIngComponent]
    });
    fixture = TestBed.createComponent(TasnimBouteraaStagesIngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
