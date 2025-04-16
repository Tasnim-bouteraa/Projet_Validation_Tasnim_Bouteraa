import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasnimBouteraaAddStagelingComponent } from './tasnim-bouteraa-add-stageling/tasnim-bouteraa-add-stageling.component';
import { TasnimBouteraaNotFoundComponent } from './tasnim-bouteraa-not-found/tasnim-bouteraa-not-found.component';
import { TasnimBouteraaStagesIngComponent } from './tasnim-bouteraa-stages-ing/tasnim-bouteraa-stages-ing.component';
import { TasnimBouteraaStageDetailComponent } from './tasnim-bouteraa-stage-detail/tasnim-bouteraa-stage-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'stages', pathMatch: 'full' },
  { path: 'stages', component: TasnimBouteraaStagesIngComponent },
  { path: 'add-stage', component: TasnimBouteraaAddStagelingComponent },
  { path: 'stage/:id', component: TasnimBouteraaStageDetailComponent },
  { path: '**', component: TasnimBouteraaNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
