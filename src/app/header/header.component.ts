import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    itemSelected: string = 'recipe';
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
        if (feature === 'recipe') {
            this.itemSelected = 'recipe';
        } else {
            this.itemSelected = 'shopping-list';
        }
    }
    constructor() { }

    ngOnInit() {
    }
}
