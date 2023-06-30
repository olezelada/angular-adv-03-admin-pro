import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-one',
  templateUrl: './graphic-one.component.html',
  styles: [
  ]
})
export class GraphicOneComponent {

  public titleOne = 'Sales';
  public labelsOne = ['products', 'services', 'inventory'];
  public dataOne = [300, 500, 200];

  public titleTwo = 'Marketing';
  public labelsTwo = ['publisher', 'TV', 'Panel'];
  public dataTwo = [30, 50, 20];

  public titleThree = 'Medical';
  public labelsThree = ['physician', 'therapy', 'nurse'];
  public dataThree = [100, 200, 300];

  public titleFour = 'Sport';
  public labelsFour = ['soccer', 'base ball', 'basket ball'];
  public dataFour = [300, 100, 500];

}
