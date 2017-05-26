import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { environment } from '../environments/environment';

export class CustomRequestOptions extends BaseRequestOptions {
    merge(options?: RequestOptionsArgs): RequestOptions {
        options.url = environment.API_BASE_URL + options.url;
        var result = super.merge(options);
        result.merge = this.merge;
        return result;
    }
}
