import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { AppComponent }  from "./app.component";
import { HttpClientModule }from '@angular/common/http';
import { HttpService }     from "./http.service";
import { ReactiveFormsModule }from '@angular/forms';
import { ListComponent } from "./list/list.component";

@NgModule({
    imports:      [BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule],
    declarations: [AppComponent,ListComponent],
    providers:    [ HttpService ],
    bootstrap:    [AppComponent],
    
})   
export class AppModule{ }
 