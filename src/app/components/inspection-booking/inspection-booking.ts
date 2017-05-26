import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http} from '@angular/http';


@Component({
  selector: 'app-inspection-booking',
  templateUrl: './inspection-booking.html',
  styleUrls: ['./inspection-booking.css'],
})
export class InspectionBookingComponent implements OnInit {

  data:Array<any>;
  sortField: string = "name";
  sortType: string = "ASC";
  type: string = "ASC";
  filterValue:string = '';
  filterField:string = ''; 
  searchValue:string = '';
  searchField:string = '';

  constructor(
  	  private router: Router,
      public http:Http
    ) { }

  ngOnInit() {
  	this.inspBooking();
  }

  inspBooking(){
	  this.http.get('assets/sample-data/insp-booking.json')
	      .map(res => res.json())
	      .subscribe(
	      response => {
	        this.data = response;
	  	}
    );
  }

  onChoose(event,type){   
    this.sortField= event;
    this.sortType = type;
    if(type == "ASC" ){
    	this.type = "DESC";
    }else {
    	this.type = "ASC";
    }
  }

  chooseStatus(event,type){
    this.filterValue= event;
    this.filterField = type;
  }

  chooseSubscriber(event){
    this.searchValue= event;
    this.searchField = 'name';
  }

  clearSearch(){
    this.searchValue= '';
    this.searchField = '';
  }

}
