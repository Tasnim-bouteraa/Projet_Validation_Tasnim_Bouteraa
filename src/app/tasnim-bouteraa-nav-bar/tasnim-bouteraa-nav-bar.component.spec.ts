import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasnimBouteraaNavBarComponent } from './tasnim-bouteraa-nav-bar.component';

describe('TasnimBouteraaNavBarComponent', () => {
  let component: TasnimBouteraaNavBarComponent;
  let fixture: ComponentFixture<TasnimBouteraaNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasnimBouteraaNavBarComponent]
    });
    fixture = TestBed.createComponent(TasnimBouteraaNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
