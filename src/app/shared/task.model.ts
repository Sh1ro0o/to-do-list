import { Priority } from "./app-enums.model";

export class Task {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public priority: Priority;

  constructor(name: string, startDate: Date, endDate: Date, priority: string) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    if(priority === 'high')
      this.priority = Priority.HIGH;
    else if(priority === 'low')
      this.priority = Priority.LOW;
    else
      this.priority = Priority.MEDIUM;
  }

  priorityToString() {
    if(this.priority === Priority.HIGH)
      return 'high';
    else if(this.priority === Priority.LOW)
      return 'low';
    else
      return 'normal';
  }
}
