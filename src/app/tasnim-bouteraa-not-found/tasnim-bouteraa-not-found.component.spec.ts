import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasnimBouteraaNotFoundComponent } from './tasnim-bouteraa-not-found.component';

describe('TasnimBouteraaNotFoundComponent', () => {
  let component: TasnimBouteraaNotFoundComponent;
  let fixture: ComponentFixture<TasnimBouteraaNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasnimBouteraaNotFoundComponent]
    });
    fixture = TestBed.createComponent(TasnimBouteraaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
