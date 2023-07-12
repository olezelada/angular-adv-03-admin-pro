import {Component, OnDestroy} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {Observable, interval} from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy{

  private _intervalSubs: Subscription;
  constructor() {
    /*this.retornaObservable()
      .pipe(retry(2))
      .subscribe(
        (value: number) => console.log('Subs -> ', value),
        (error: string) => console.warn('Error ->', error),
        () => console.info('Obs terminando !!!')
      );*/
    this._intervalSubs = this._retornaIntervalo().subscribe(console.log);
  }

  public ngOnDestroy(): void {
        this._intervalSubs.unsubscribe();
    }

  public retornaObservable(): Observable<number>{
    let i: number = -1;
    return  new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo)
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor de 2');
        }

      }, 1000);
    });
  }

  private _retornaIntervalo(): Observable<number>{
    return interval(100)
      .pipe(
        map(value => value + 1),
        filter( count => count % 2 === 0 ? true: false)
      );
  }

}
