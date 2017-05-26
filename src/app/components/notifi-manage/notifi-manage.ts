import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http} from '@angular/http';

import { NotificationService } from '../../services/notification.service';
//import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-notifi-manage',
  templateUrl: './notifi-manage.html',
  styleUrls: ['./notifi-manage.css'],
  providers: [NotificationService]
})
export class NotificationManagementComponent implements OnInit {  
  tptext:string = '';
  data:Array<any>;
  sections; 

  constructor(
      private router: Router,
      public http: Http,
      private notificationService: NotificationService,
    ) { }

  ngOnInit() {
    
    this.notifications();
    
  }

  notifications() {    
    this.notificationService.getNotificationList().subscribe(
      response => {         
        this.sections = response;          
        for (let i = 0; i < this.sections.length; i++) {
          let sectionCode = this.sections[i].section_code;
        
          this.notificationService.getItemList(sectionCode)
          .subscribe(
            resp => {
              if(resp.length > 0){
                this.sections[i].items = resp;
                for (let j = 0; j < this.sections[i].items.length; j++) {
                  if(j == 0){
                    this.sections[i].items[j].more_detail = true ; 
                  }else{
                    this.sections[i].items[j].more_detail = false ;
                  }
                }
              }

            }
          );

        } 

      }
    );

  }

 

  redirect(secCode,itemId){
    this.router.navigate(['/detail-information',secCode,itemId]);
  }  

  updateField(id,triName,status){
    let itemDetail = {
    "organization_id": "1",
    "trigger_name": triName,
    "item_id": id,
      "status": {
        "enabled": status
      }
    };

    this.notificationService.updateItmes(itemDetail)
    .subscribe(
      response => {              
        console.log(response);
        }
    );

  }


  onChange(id,triName,event){
    if(event){
      this.updateField(id,triName,true);
    }else if(!event){
      this.updateField(id,triName,false);
    }
  }


}
