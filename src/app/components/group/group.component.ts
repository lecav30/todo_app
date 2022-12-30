import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  @Input() group!: any;

  tasks: any = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTasksByGroupId(this.group.id).subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}
