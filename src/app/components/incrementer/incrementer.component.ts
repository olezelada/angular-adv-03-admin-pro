import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit{

  @Input() public  progress: number = 0;
  @Input() public  btnClass: string = 'btn-primary';


  @Output() public onProgress: EventEmitter<number> = new EventEmitter<number>();

  public ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public changeValue(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
      this.onProgress.emit(100);
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.onProgress.emit(0);
      return;
    }

    this.progress = this.progress + value;

    this.onProgress.emit(this.progress);
  }

  public onChange(newValue: number): void{

    if( newValue >= 100){
      this.progress = 100;
    }else if(newValue <= 0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }

    this.onProgress.emit(this.progress);

  }


}
