import 'rxjs/add/operator/toPromise';

import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { User }             from '../models/user';
import { AuthService }      from '../services/auth';
import { CacheService }     from '../services/cache';

@Injectable()
export class CategoryService {
    currentUser: User;

    constructor(private http: Http,
                private authService: AuthService,
                private cacheService: CacheService) {
        authService.currentUser.subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    private createHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        if (this.currentUser) {
            headers.append('Authorization', this.currentUser.idToken);
        }
        return headers;
    }

    getProductLineCategory(){
      return [{"Name":"Department A", "address":"1A" },{"Name":"Department B", "address":"1B" }];
    } 

    getProductCategory(){
      return ["Car & Mobile","Foods"];
    } 

    getCountryCategory(){
      return ["Viet Nam","US"];
    } 

    getInspectionLevelCategory(){
      return ["Level 1","Level 2"];
    } 

    getPackingTypeCategory(){
      return ["Assortment","Assortment B"];
    } 

    getRetailNameCategory(){
      return ["Retail A","Retail B"];
    } 

    getVendorNameCategory(){
      return ["Vendor A","Vendor B"];
    } 

    getFactoryNameCategory(){
      return ["Factory A","Factory B"];
    } 

    getColorCategory(){
      return ["Black","White","Yellow"];
    } 

    private toQueryString(params): string {
        var parts = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
            }
        }
        return parts.join("&");
    }

    private interpolate(str: string, obj: any): string {
        if (str.indexOf('{') == -1) {
            return str;
        }

        if (!obj) {
            throw "Object required to provide interpolation values.";
        }

        return str.replace(/{([^{}]*)}/g,
                           function (match, name) {
                               var rep = obj[name];
                               return typeof rep === 'string' || typeof rep === 'number' ? `${rep}` : match;
                           });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
