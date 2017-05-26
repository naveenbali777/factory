import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class BookingFormService {

  constructor(private http: Http) {


  }

    /*getBookingFormFields:Array() {

      return this.http.get('app/components/booking-form/standard.json').map((res:Response) => res.json());

    }


    createBookingFrom(formData) {

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(formData);
      return this.http.post('/api/food/', body, headers).map((res: Response) => res.json());

    }*/



  someMethod() {
      return 'Hey!';
  }

}
