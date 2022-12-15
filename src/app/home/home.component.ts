import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projects: any = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(this.projects);
    });
  }
}
