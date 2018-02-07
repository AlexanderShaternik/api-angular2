import { Component, OnInit} from '@angular/core';
import { HttpService} from './../http.service';
import { Item } from './../Item';
import { url } from 'inspector';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'list',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
   
    items: Item[];
    location:{}; 
    constructor(private httpService: HttpService){
        this.items = [];
        console.log(this.items)
    }
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any)=>{
            // this.location = data.response.locations[0];
            this.items = data.response.listings;
        })
    }
}