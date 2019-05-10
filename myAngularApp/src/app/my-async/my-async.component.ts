///<reference path="myService.ts"/>
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/do';
import { MyService } from './myService';


@Component({
    selector: 'app-my-async',
    templateUrl: './my-async.component.html',
    styleUrls: ['./my-async.component.css']
})
export class MyAsyncComponent implements OnInit {

    constructor(private myService: MyService) {
    }

    data: Observable<any>;

    ngOnInit() {
        this.data = this.myService.getAll().share();
        this.data.subscribe(
            x => {
                console.log('return data', x);
        }
        );
    }

}
