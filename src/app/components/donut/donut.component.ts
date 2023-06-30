import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  @Input() public title: string;
  @Input() public labels: string[];
  @Input() public data: number[];

  public readonly type: string = 'doughnut';

  constructor() {
    this.title = 'Sin Titulo'
    this.labels = ['Label 1', 'Label 2', 'Label 3'];
    this.data = [300, 500, 200];
  }

}
