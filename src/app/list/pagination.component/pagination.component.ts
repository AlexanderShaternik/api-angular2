import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector: 'app-pagination',
    templateUrl:'./pagination.component.html',
    styleUrls: ['./pagination.component.css']
})

export class PaginationComponent{
// paginations:number[]=[1,2,3,4,5]
@Input() currentPage: number;
back:string="back";
next:string="next";

@Output() onTurnPage = new EventEmitter<number>()
turnPage(page:string){
    this.onTurnPage.emit(page == "next"? ++this.currentPage:page == 'back'&& this.currentPage !== 1?--this.currentPage : !isNaN(+page) ? this.currentPage = +page : null)
    console.log(this.currentPage)
    // for (let i = 0; i < this.currentPage; i++){

    //     }
    }
}

