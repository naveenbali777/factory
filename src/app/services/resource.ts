import 'rxjs/add/operator/toPromise';

import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { User }             from '../models/user';
import { AuthService }      from '../services/auth';
import { CacheService }     from '../services/cache';

@Injectable()
export class ResourceService {
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

  getAll(cfg, ctx: any = undefined): Promise<any[]> {
    if (cfg.CACHE_KEY) {
      let objs = this.cacheService.getObject(cfg.CACHE_KEY);
      if (objs) {
        return Promise.resolve(objs);
      }
    }
    return this.fetchAll(cfg, ctx);
  }

  fetchAll(cfg, ctx: any = undefined): Promise<any[]> {
    let url = this.interpolate(cfg.BASE_URL, ctx);
    return this.http.get(url, { headers: this.createHeaders() })
      .toPromise()
      .then(response => {
        let objs = response.json().data;
        objs = objs.map(obj => new cfg.MODEL(obj))
        if (cfg.CACHE_KEY) {
          this.cacheService.putObject(cfg.CACHE_KEY, objs);
        }
        return objs;
      })
      .catch(this.handleError);
  }

  getById(cfg, id: number, ctx: any = undefined): Promise<any> {
    let objs = this.cacheService.getObject(cfg.CACHE_KEY) || [];
    let entity = objs.find(obj => obj.id === id);

    // if entity is not in cache, then fetch it from backend and cache it
    if (!entity) {
      let url = this.interpolate(cfg.BASE_URL, ctx);
      return this.http.get(url, { headers: this.createHeaders() })
        .toPromise()
        .then(res => {
          let obj = res.json().data;
          obj = cfg.MODEL ? new cfg.MODEL(obj) : obj;
          if (obj.CACHE_KEY) {
            objs.push(obj);
          }
          return obj;
        });
    } else {
      let obj = objs.find(obj => obj.id === id);
      return Promise.resolve(obj);
    }
  }

  create(cfg, obj: any, ctx: any = undefined): Promise<any> {
    let url = this.interpolate(cfg.BASE_URL, ctx);
    return this.http
      .post(url, JSON.stringify(obj), { headers: this.createHeaders() })
      .toPromise()
      .then(res => {
        let obj = res.json().data;
        obj = cfg.MODEL ? new cfg.MODEL(obj) : obj;
        if (cfg.CACHE_KEY) {
          let objs = this.cacheService.getObject(cfg.CACHE_KEY)
          objs.push(obj)
        }
        return obj;
      })
      .catch(this.handleError);
  }

  update(cfg, obj: any, ctx: any = undefined): Promise<any> {
    let url = this.interpolate(cfg.BASE_URL, ctx);
    url = `${url}/${obj.id}`;
    return this.http
      .put(url, JSON.stringify(obj), { headers: this.createHeaders() })
      .toPromise()
      .then(res => {
        let obj = res.json().data;
        if (cfg.CACHE_KEY) {
          let objs = this.cacheService.getObject(cfg.CACHE_KEY)
          let index = objs.findIndex(r => r.id === obj.id)
          objs[index] = new cfg.MODEL(obj);
        }
        return obj;
      })
      .catch(this.handleError);
  }

  save(cfg, obj: any): Promise<any> {
    if (!obj.id) {
      return this.create(cfg, obj);
    } else {
      return this.update(cfg, obj);
    }
  }

  find(cfg, params: any, ctx: any = undefined): Promise<any> {
    let url = this.interpolate(cfg.BASE_URL, ctx);
    let queryString = this.toQueryString(params);
    url = `${url}?${queryString}`;
    return this.http.get(url, { headers: this.createHeaders() })
      .toPromise()
      .then(response => {
        let objs = response.json().data;
        objs = objs.map(obj => new cfg.MODEL(obj));
        if (cfg.CACHE_KEY) {
          this.cacheService.putObject(cfg.CACHE_KEY, objs);
        }
        return objs;
      })
      .catch(this.handleError);
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
