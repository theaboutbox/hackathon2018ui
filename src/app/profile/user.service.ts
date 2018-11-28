import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient ) {}

    private usersUrl = 'https://ssz1kizzj9.execute-api.us-east-1.amazonaws.com/api/users';
    private userUrl = 'https://ssz1kizzj9.execute-api.us-east-1.amazonaws.com/api/user/123';
  /**
   * Users list
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError('getUsers', []))
    );
  }

  /**
   * User Details
   */
  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl).pipe(
      catchError(this.handleError('getUser', {id: 123}))
    );
  }

  /**
   * Get user activity data
   */
  getActivityData(): Observable<any[]> {
    return of(
      [
        {
          date: 'June 11 2018',
          activity: 'Enrolled'
        },
      {
          date: 'June 15 2018',
          activity: 'Counselor appointment'
        },
      {
        date: 'June 23 2018',
          activity: 'Career Library access'
        },
      {
        date: 'June 23 2018',
          activity: 'Training completed'
        },
      {
        date: 'July 10 2018',
          activity: 'Employed'
        },
      {
        date: 'July 11 2018',
          activity: 'Profile updated'
        },
      {
        date: 'August 30 2018',
          activity: 'SMS outbound'
        },
      {
          date: 'September 1 2018',
          activity: 'Counselor appointment'
        },
      {
        date: 'September 2 2018',
          activity: 'Career Library access'
        },
      {
        date: 'September 15 2018',
          activity: 'Career Library access'
        },
      {
        date: 'September 25 2018',
          activity: 'Career Library access'
        },
      {
        date: 'October 1 2018',
          activity: 'Training completed'
        }
      ]);
  }

  getSelfEval(): Observable<any[]> {
    return of( [
      {
        data: [0, 20, 30, 40, 60, 60, 60],
        label: 'Self-efficacy'
      },
   {
        data: [20, 40, 60, 80, 80, 80, 80],
        label: 'Grit'
      },
   {
        data: [10, 30, 40, 40, 40, 40, 40],
        label: 'Health Status'
      },
   {
        data: [10, 30, 50, 40, 40, 40, 40],
        label: 'Food Security'
      },
   {
        data: [20, 35, 35, 35, 35, 35, 35],
        label: 'Housing Stability'
      },
   {
        data: [30, 40, 50, 55, 60, 60, 80],
        label: 'Transportation access'
      },
   {
        data: [50, 40, 30, 25, 10, 0, 0],
        label: 'legal issues'
      },
   {
        data: [30, 35, 40, 45, 51, 55, 60],
        label: 'Family Care'
      },
   {
        data: [15, 20, 30, 30, 45, 50, 55],
        label: 'Financial status'
      },
   {
        data: [10, 20, 30, 35, 40, 55, 60],
        label: 'Education'
      },
   {
        data: [10, 20, 30, 35, 40, 55, 60],
        label: 'Job Skills'
      }
    ]);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
