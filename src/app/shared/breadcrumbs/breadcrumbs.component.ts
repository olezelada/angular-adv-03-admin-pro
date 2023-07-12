import {Component, OnDestroy} from '@angular/core';
import {filter, map, takeUntil} from "rxjs/operators";
import {ActivationEnd, Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title: string = '';
  private _unsubscribe: Subject<void> = new Subject<void>();

  constructor(private _router: Router) {
    this._getRoutesParam();
  }

  public  ngOnDestroy(): void {
    this._unsubscribe.unsubscribe();
  }

  private _getRoutesParam(): void {
    this._router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) =>  event.snapshot.firstChild === null ),
        map((event: ActivationEnd) => event.snapshot.data),
        takeUntil(this._unsubscribe)
      )
      .subscribe( ({title}) => {
        this.title = title
        document.title = `Admin Pro - ${title}`;
      });
  }


}
