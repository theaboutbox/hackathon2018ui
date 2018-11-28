import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  /**
   * Jobs list
   */
  getJobs(): Observable<Job[]> {
    return of([
      { id: 11, name: 'Job1', discription: 'Job1 aws' },
      { id: 12, name: 'Job2', discription: 'Job2 aws'  },
      { id: 13, name: 'Job3', discription: 'Job3 aws'  },
      { id: 14, name: 'Job3' }
    ]);
  }

}
