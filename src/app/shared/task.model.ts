export class Task {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public priority: string;

  constructor(name: string, startDate: Date, endDate: Date, priority: string) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
  }
}
