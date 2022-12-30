import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  taskPath = 'http://localhost:3000/tasks';
  groupPath = 'http://localhost:3000/groups';
  projectPath = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get(this.projectPath);
  }

  // getProjectsByUserId() {
  //   return this.http.get(this.projectPath);
  // }

  getProjectById(id: number) {
    return this.http.get(this.projectPath + `/${id}`);
  }

  getGroupsByProjectId(id: number) {
    return this.http.get(this.groupPath + `?projectId=${id}`);
  }

  getTasksByGroupId(id: number) {
    return this.http.get(this.taskPath + `?groupId=${id}`);
  }
}
