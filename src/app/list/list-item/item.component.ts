import { Component,Input} from '@angular/core';

@Component({
    selector: 'appitem',
    templateUrl:'./item.component.html',
    styleUrls: ['./item.component.css']
})

export class ItemComponent{
    @Input() item:object;
}