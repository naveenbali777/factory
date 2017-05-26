import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { MeasurementChartService } from '../../services/measurement-chart.service';


@Component({
  selector: 'app-measurement-chart',
  templateUrl: './measurement-chart.component.html',
  styleUrls: ['./measurement-chart.component.css'],
  providers: [MeasurementChartService]
})
export class MeasurementChartComponent implements OnInit {

  measurementData;
  fileCheck:boolean = false;
  handleError: any; 
  csvData: any[] = [];

  constructor(
      private router: Router,
      private measurementChartService: MeasurementChartService
    ) { }

  ngOnInit() {
    this.showData();
  }

  showData(){
  	let assignmentId = '26de46f4-d24d-4fda-8dad-ce1f7f8af941';

    this.measurementChartService.mChartData(assignmentId).subscribe(
      response => { 
        console.log(response.data.measurementChart.standard);
        this.measurementData = response.data.measurementChart.standard;
       console.log(this.measurementData);
      }
    );
    
  }  

  download(){
  	let assignmentId = '26de46f4-d24d-4fda-8dad-ce1f7f8af941'  ;
    this.measurementChartService.fileDownload(assignmentId);
  }  

  onChange(files){
  	this.fileCheck = !this.fileCheck;
  	let assignmentId = '26de46f4-d24d-4fda-8dad-ce1f7f8af941'  ;  
    if(files) {
      this.measurementChartService.postWithFile('ams/v1/assignments/'+assignmentId+'/measurementsChart',files).then(result => {

      	console.log(result);
        this.showData();

      });

    }
  }

}
