import { Component,Input } from '@angular/core';
import { HttpService } from './../http.service';
import { Item } from './../Item';

@Component({
    selector: 'applist',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    @Input() list:Item[];
    @Input() load:boolean;
    @Input() currentPage: number;
    paginations:number[]=[1,2,3,4,5];
    constructor(private httpservice: HttpService){ }

    onTurnPage(num:number){
        this.currentPage = num;
        for (let i = this.currentPage - 3; i < this.currentPage + 4; i++) {
            this.paginations[i + 3 - this.currentPage] = i;
        }
        num=num+3;
        this.httpservice.params.page = num.toString();
        this.httpservice.getData().subscribe(data=>this.list = data.response.listings) 
    }
}    
