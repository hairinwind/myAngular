import { Component, OnInit } from '@angular/core';
import { FightersService } from './services/fighters/fighters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mocked-api';
  fighters: any;

  constructor(private fightersService: FightersService) { }

  ngOnInit() {
    this.fightersService.get().subscribe(res => {
      this.fighters = res;
    });
  }
}
