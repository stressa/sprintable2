import {Component} from '@angular/core'
import {TaskService} from './task.service'

export interface Tasks {
  tasks: String[];
}

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent{
  tasks = Tasks;
  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }
}
