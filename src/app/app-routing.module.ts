import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearnComponent } from './learn/learn.component';
import { MetricsComponent } from './metrics/metrics.component';
import { JobsComponent } from './jobs/jobs.component';
import { AgGridModule } from 'ag-grid-angular';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'learn', component: LearnComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'jobs', component: JobsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
