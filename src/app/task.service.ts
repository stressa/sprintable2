import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  constructor (
      private http: Http
    ) {}

  getTasks() {
    return this.http.get(`http://localhost:3002/tasks`).map((res:Response) => res.json());
  }
}
