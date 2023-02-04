import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  @Output() taskCreated = new EventEmitter<Task>();

  taskName: string = '';
  taskStartDate: Date = new Date();
  taskEndDate: Date = new Date();
  priority: string = 'normal';


  onTaskAdd() {
    this.taskCreated.emit(new Task(this.taskName, this.taskStartDate, this.taskEndDate, this.priority))
    this.taskName = ''
    this.taskStartDate = new Date();
    this.taskEndDate = new Date();
    this.priority = 'normal';
  }
}
