import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    showComment = false ;
    selectOther = false ;
    clientView = true ;
    data:Array<any>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public http:Http
    ) { }

    ngOnInit() {
        this.displayCorrectiveForm();
    }

    displayCorrectiveForm(){
        this.http.get('assets/sample-data/result-data.json')
            .map(res => res.json())
            .subscribe(
                response => {
                    this.data = response;
                    let id = this.route.snapshot.params['id'];
                    let view = this.route.snapshot.params['view'];

                    if(view === 'factory'){
                        this.clientView = false ;
                    }else{
                        this.clientView = true ;
                    }
                }
            );
    }

    onActionChange(actionValue) {
        if(actionValue == 'other') {
            this.selectOther = true;
        } else {
            this.selectOther = false;
        }

    }
}

