import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LearnComponent } from './learn/learn.component';
import { JobsComponent } from './jobs/jobs.component';
import { MetricsComponent } from './metrics/metrics.component';
import { JobComponent } from './jobs/job/job.component';
import { CourseComponent } from './learn/course/course.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    LearnComponent,
    JobsComponent,
    MetricsComponent,
    JobComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
