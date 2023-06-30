import { Component } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  public progressOne: number = 25;
  public progressTwo: number = 35;

  public getProgressOne(): string {
    return `${this.progressOne}%`;
  }

  public getProgressTwo(): string {
    return `${this.progressTwo}%`;
  }

  public changeValueOne(value: number): void{
    this.progressOne = value;
  }

  public changeValueTwo(value: number): void{
    this.progressTwo = value;
  }

}
