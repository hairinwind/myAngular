import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyService {

    private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

    constructor(
        protected httpClient: HttpClient,
    ) {}

    public get(id: string): Observable<any> {
        return this.httpClient.get(`${this.URL}/${id}`);
    }

    public getAll(): Observable<any> {
        return this.httpClient.get(`${this.URL}`);
    }

}
