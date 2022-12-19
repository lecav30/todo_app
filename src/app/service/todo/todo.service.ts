import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  taskPath = 'http://localhost:3000/tasks';
  projectPath = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.taskPath);
  }

  getProjects() {
    return this.http.get(this.projectPath);
  }
}
