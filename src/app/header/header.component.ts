import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorarageService } from '../shared/data-storarage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    itemSelected: string = 'recipe';

    constructor(private dataStorarageService: DataStorarageService) { }

    ngOnInit() {
    }
    
    onSaveData(){
        this.dataStorarageService.storeRecipes()
        .subscribe(
        (responde: Response) => {
            console.log(responde);
        }
        );
    }
}
