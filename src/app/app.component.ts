import { Component, ViewChild } from '@angular/core';
import { Task } from './shared/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskList: Task[] = [];
  displayedColumns: String[] = ['Name', 'Begin', 'End', 'Priority', 'Actions'];

  addTask(task: Task) {
    this.taskList.push(task);
    console.log(this.taskList);
  }
}
