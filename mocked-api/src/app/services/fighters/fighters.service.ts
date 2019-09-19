import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('api/fighters');
  }
}
