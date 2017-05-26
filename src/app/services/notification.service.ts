import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationService {
    constructor(private http: Http) {}
    //rootLink:'https://ysdzrkmclh.execute-api.us-east-1.amazonaws.com/nms/v1/1';

    getNotificationList(){
        return this.http.get('nms/1/sections')
            .map(res => res.json());
    }

    getItemList(secCode){
        return this.http.get('nms/1/sections/'+secCode+'/items')
            .map(res => res.json());
    }

    getItem(secCode,itemId){
        return this.http.get('nms/1/sections/'+secCode+'/items/'+itemId)
            .map(res => res.json());
    }

    updateItmes(itemFields){
    	return this.http.put('nms/1/sections/Booking/items', itemFields)
       		.map(res => res.json());
	}

    
}