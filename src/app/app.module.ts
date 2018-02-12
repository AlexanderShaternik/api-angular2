import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { AppComponent }  from "./app.component";
import { HttpClientModule }from '@angular/common/http';
import { HttpService }     from "./http.service";
import { ReactiveFormsModule }from '@angular/forms';
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/list-item/item.component";
import { PaginationComponent } from "./list/pagination.component/pagination.component";

@NgModule({
    imports:      [BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule],
    declarations: [AppComponent,ListComponent,ItemComponent,PaginationComponent],
    providers:    [ HttpService ],
    bootstrap:    [AppComponent],
})   
export class AppModule{ }
 