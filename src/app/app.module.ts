import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasnimBouteraaNavBarComponent } from './tasnim-bouteraa-nav-bar/tasnim-bouteraa-nav-bar.component';
import { TasnimBouteraaStagesIngComponent } from './tasnim-bouteraa-stages-ing/tasnim-bouteraa-stages-ing.component';
import { TasnimBouteraaAddStagelingComponent } from './tasnim-bouteraa-add-stageling/tasnim-bouteraa-add-stageling.component';
import { TasnimBouteraaNotFoundComponent } from './tasnim-bouteraa-not-found/tasnim-bouteraa-not-found.component';
import { TasnimBouteraaStageDetailComponent } from './tasnim-bouteraa-stage-detail/tasnim-bouteraa-stage-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasnimBouteraaNavBarComponent,
    TasnimBouteraaStagesIngComponent,
    TasnimBouteraaAddStagelingComponent,
    TasnimBouteraaNotFoundComponent,
    TasnimBouteraaStageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
