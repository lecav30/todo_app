import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project!: any;

  groups: any = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getGroupsByProjectId(this.project.id).subscribe((data) => {
      this.groups = data;
      console.log(this.groups);
    });
  }
}
