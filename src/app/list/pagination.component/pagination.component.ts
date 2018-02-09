import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector: 'app-pagination',
    templateUrl:'./pagination.component.html',
    styleUrls: ['./pagination.component.css']
})

export class PaginationComponent{
paginations:number[]=[1,2,3,4,5]
currentPage: number=1;
back:string="back";
next:string="next";

@Output() onTurnPage = new EventEmitter<number>()
turnPage(page:string){
    console.log(page);
    this.onTurnPage.emit(page == "next"? ++this.currentPage:page == 'back'?--this.currentPage:this.currentPage = +page)
    // for (let i = 0; i < this.currentPage; i++){

    //     }
    }
}