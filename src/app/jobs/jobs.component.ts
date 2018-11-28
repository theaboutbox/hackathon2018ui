import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { Job } from './job.model';
import { JobService } from './job.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  title = 'app';

  columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    jobsList: Job[];

    constructor(private jobsService: JobService) { }

    ngOnInit() {
      this.getJobs();
    }

    /**
     * Getting the list of jobs
     */
    getJobs(): void {
      this.jobsService.getJobs()
      .subscribe(jobs => this.jobsList = jobs);
    }


}
