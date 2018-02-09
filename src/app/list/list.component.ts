import { Component,Input} from '@angular/core';
import { HttpService } from './../http.service'

@Component({
    selector: 'applist',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    @Input() list:object[];
    constructor(private httpservice: HttpService){ }

    onTurnPage(num:number){
        console.log(num);
        num.toString();
        this.httpservice.params.page = num.toString();
        this.httpservice.getData().subscribe((data:any)=>{
            console.log(data.response.listings)
            this.list = data.response.listings;
        }) 
    }
}    
