import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransformComponent} from "./transform/transform.component";
import {StatsComponent} from "./stats/stats.component";
import {ActivitiesComponent} from "./activities/activities.component";

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'transform', component: TransformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
