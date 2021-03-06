import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import { Item } from "./Item";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit  { 
    list:Item[];
    currentPage:number;
    load: boolean = false;
    myForm : FormGroup;
    constructor(private formBuilder: FormBuilder,private httpservice:HttpService){
    }

    ngOnInit() {
    this.myForm = this.formBuilder.group({
        listing_type: ["buy"],
        place_name: ["manchester"]
        })
    }

    onSubmit(){
        this.setForm(this.myForm.value.listing_type,this.myForm.value.place_name);
        this.myForm.reset();
    }
    
    setForm(type:string,place:string){
        this.httpservice.params.listing_type = type;
        this.httpservice.params.place_name = place;
        this.loadlist();
    }

    loadlist(){
        this.currentPage = 1;
        this.load=true;
        this.httpservice.getData().subscribe(data=>this.list = data.response.listings)
    }
}
