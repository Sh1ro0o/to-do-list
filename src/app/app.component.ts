import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Priority } from './shared/app-enums.model';
import { Task } from './shared/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskList: Task[] = [new Task('something', new Date(), new Date(), 'high')];
  displayedColumns: String[] = ['Name', 'Begin', 'End', 'Priority', 'Actions'];
  @ViewChild('MatTable') table: MatTable<any>;

  addTask(task: Task) {
    this.taskList.push(task);
    this.table.renderRows();
    console.log(this.taskList);
  }
}
