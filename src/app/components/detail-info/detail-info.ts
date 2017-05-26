import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Http} from '@angular/http';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.html',
  styleUrls: ['./detail-info.css'],
  providers: [NotificationService]
})
export class DetailInformationComponent implements OnInit {
  editField = true;
  data:Array<any>;
  sec:Array<any>;
  myDate: string = '';

  constructor(
      private router: Router,      
      private route: ActivatedRoute,
      private notificationService: NotificationService,
      public http:Http
    ) { }

  ngOnInit() {
  	this.infoDetail();
  }

  infoDetail(){
    let id = this.route.snapshot.params['id'];
    let secCode = this.route.snapshot.params['section'];
    this.notificationService.getItem(secCode,id).subscribe(
      response => {
        this.data = response;
      }
    );

  }

  saveInfo(){
    console.log(this.data);

    this.notificationService.updateItmes(this.data)
    .subscribe(
      response => {              
        console.log(response);
        this.editField = true;
        }
    );
    
  }

  updateField(savefield){
    this.notificationService.updateItmes(savefield)
    .subscribe(
      response => {              
        console.log(response);
        }
    );

  }


  onChange(event){
    let itemDetail = {
      "organization_id": "1",
      "trigger_name": this.data['trigger_name'],
      "item_id": this.data['item_id']
      };

    if(event){
      itemDetail['status'] = {"enabled": true};
      this.updateField(itemDetail);
    }else if(!event){
      itemDetail['status'] = {"enabled": false};
      this.updateField(itemDetail);
    }
  }


  saveValue(fname,key){    
    if(key == 13){
      let itemDetail = {
        "organization_id": "1",
        "trigger_name": this.data['trigger_name'],
        "item_id": this.data['item_id']
      };
      itemDetail[fname] = this.data[fname] ;
      this.updateField(itemDetail); 
    }    
  }

 

}
