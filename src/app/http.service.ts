import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
  
@Injectable()
export class HttpService{
    // list: object[];
    private apiUrl1 = 'https://api.nestoria.co.uk/api';
    params = {
        encoding: 'json',
        pretty: '1',
        page:  '1',
        action: 'search_listings',
        country: 'uk',
        number_of_results: '20',
        listing_type: '',
        language: 'en',
        place_name: ''
    }
    constructor(private http: HttpClient){ }

    getData():Observable<any>{
        return this.http.get(this.apiUrl1,{ params:this.params });
    }  

}   