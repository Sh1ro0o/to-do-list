import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, ViewChild, Input, Output, DoCheck, OnInit, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Task } from '../shared/task.model';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements DoCheck, OnInit{
  //2 way binding
  @Input() tasks: Task[];
  @Output() tasksChange = new EventEmitter<Task[]>();

  oldTasksLength: number;
  displayedColumns: String[] = ['Name', 'Begin', 'End', 'Priority', 'Actions'];
  @ViewChild('MatTable') table: MatTable<any>;


  constructor(private editDialog: MatDialog){}

  //sets the tasks list length
  ngOnInit() {
    this.oldTasksLength = this.tasks.length;
  }

  //we implement or own check if length of task list changed (since we have to manually update mat-table)
  ngDoCheck() {
    if (this.oldTasksLength != this.tasks.length) {
      this.table.renderRows();
      this.oldTasksLength = this.tasks.length;
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTaskClicked(index: number) {
    let dialogRef = this.editDialog.open(TaskEditComponent, {
      height: '500x',
      width: '350px',
      data: this.tasks[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.tasks[index].name = result.name;
      this.tasks[index].startDate = result.startDate;
      this.tasks[index].endDate = result.endDate;
      this.tasks[index].priority = result.priority;
    })
  }
}
