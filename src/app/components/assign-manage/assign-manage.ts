import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-assign-manage',
  templateUrl: './assign-manage.html',
  styleUrls: ['./assign-manage.css']
})
export class AssignmentManagementComponent implements OnInit {
  
  selectView = false ;
  selectAssing:string = '';
  data:Array<any>;
  selMAssing:string = '';
  
  filterValue:string = '';
  filterField:string = '';
  selectOpt ={s1: '', s2: '',s3: '', s4: '',s5: '', s6: '' };

  constructor(
  	  private router: Router,
      private route: ActivatedRoute,
      public http:Http
    ) { }

  ngOnInit() {
  	 this.http.get('assets/sample-data/assign-manage.json')
      .map(res => res.json())
      .subscribe(
      response => {
        this.data = response;

	  	let view = this.route.snapshot.params['view'];

	    if(view === 'my'){
	    	this.selectView = true ;
	    	this.selectAssing = 'my';
	    }else if(view === 'observation'){
	    	this.selectView = true ;
	    	this.selectAssing = 'observation';
	    }else {
	    	this.selectView = false ;
	  		this.selectAssing = '';
	    }
	  }
    );
  }

  toggleHighlight(checkView){
  	if(checkView === 'my'){
    	this.selectView = true ;
    	this.selectAssing = 'my';
    }else if(checkView === 'observation'){
    	this.selectView = true ;
    	this.selectAssing = 'observation';
    }else {
    	this.selectView = false ;
  		this.selectAssing = '';
    }

  }
  chooseStatus(event,type){
    this.filterValue= event;
    this.filterField = type;
    for(var i = 1; i < 7; i++){
      if(this.selectOpt['s'+i] != event){
        this.selectOpt['s'+i] = '';
      }
    }
  }

  clearFilter(){
  	this.filterValue= '';
    this.filterField = '';
    for(var i = 1; i < 7; i++){
      this.selectOpt['s'+i] = '';
    }
  }

}
