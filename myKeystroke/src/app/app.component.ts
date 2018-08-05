import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { WikipediaService } from './wikipedia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myKeystroke';
  protected searchFormControl = new FormControl('');
  protected searchKeywords: string[] = [];
  protected searchResult: Observable<string>;

  constructor(private wikipediaService: WikipediaService) {
  }

  ngOnInit() {
    this.searchResult = this.searchFormControl.valueChanges
      .debounceTime(500)  //npm install rxjs-compat --save
      .distinctUntilChanged()
      .switchMap(term => {
        console.log('search: ', term);
        this.searchKeywords.push(term);
        return this.wikipediaService.search(term);
      });
  }
}
