import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasnimBouteraaStageDetailComponent } from './tasnim-bouteraa-stage-detail.component';

describe('TasnimBouteraaStageDetailComponent', () => {
  let component: TasnimBouteraaStageDetailComponent;
  let fixture: ComponentFixture<TasnimBouteraaStageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasnimBouteraaStageDetailComponent]
    });
    fixture = TestBed.createComponent(TasnimBouteraaStageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
