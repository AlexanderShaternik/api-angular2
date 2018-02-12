import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl:'./pagination.component.html',
    styleUrls: ['./pagination.component.css']
})

export class PaginationComponent{
@Input() paginations:number[];
@Input() currentPage: number;

@Output() onTurnPage = new EventEmitter<number>()
turnPage(page:number){
    this.onTurnPage.emit(page)
    window.scrollTo(0,0);
    }
}

