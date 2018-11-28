import { UserService } from './../profile/user.service';
import { Component, OnInit } from '@angular/core';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { User } from '../profile/user.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    { // grey
       backgroundColor: getStyle('--primary'),
        borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';
  userList: any;
  currentUser: User;


  // lineChart
  public lineChartData: Array<any> = [
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
  ];
  public lineChartLabels: Array<any> = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    fill: false
  };
  public lineChartColours: Array<any> = [
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      // backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      // backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public lineChart2Data: Array<any> = [
    {
      data: [0, 100, 100, 100, 100, 100],
      label: 'Employed'
    },
  {
      data: [0, 0, 0, 0, 0, 100],
      label: 'Job satisfaction'
    },
  {
      data: [100, 0, 0, 0, 100, 100],
      label: 'Counselor Interaction'
    },
  ];
  public lineChart2Labels: Array<any> = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  public lineChart2Options: any = {
    animation: false,
    responsive: true,
    fill: false
  };
  public lineChart2Legend = true;
  public lineChart2Type = 'line';

  activityData: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    this.getActivityData();
  }

   /**
     * Getting the list of jobs
     */
    getUser(): void {
      this.userService.getUser()
      .subscribe(users => {
          // this.userList = users;
          this.currentUser = users;
        });
    }

    /**
     * Getting the list of jobs
     */
    getActivityData(): void {
      this.userService.getActivityData()
      .subscribe(activity => {
          // this.userList = users;
          this.activityData = activity;
        });
    }


}
