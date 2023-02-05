import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/shared/task.model';
import { TaskListComponent } from '../task-list.component';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnDestroy {
  taskName: string = '';
  taskStartDate: Date = new Date();
  taskEndDate: Date = new Date();
  priority: string = '';
  shouldChangeTask: boolean = false;

  //receiving data and storing it
  constructor(@Inject(MAT_DIALOG_DATA) public data: Task, private matDialogRef: MatDialogRef<TaskListComponent>) {
    this.taskName = data.name;
    this.taskStartDate = data.startDate;
    this.taskEndDate = data.endDate;
    this.priority = data.priority;
  }

  //sets boolean to true -> edited data gets sent in ngOnDestroy()
  editTask() {
    this.shouldChangeTask = true;
  }

  ////send back edited data if Edit button was clicked otherwise send back unedited data
  ngOnDestroy(): void {
    if(this.shouldChangeTask)
      this.matDialogRef.close(new Task(this.taskName, this.taskStartDate, this.taskEndDate, this.priority));
    else
      this.matDialogRef.close(this.data);
  }


}
