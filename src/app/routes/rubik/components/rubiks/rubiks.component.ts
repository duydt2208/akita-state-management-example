import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Rubik } from 'src/app/models';
import { RubikQuery, RubikService } from 'src/app/store/rubik';

@Component({
  selector: 'app-rubiks',
  templateUrl: './rubiks.component.html',
  styleUrls: ['./rubiks.component.scss']
})
export class RubiksComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  rubiks$: Observable<Rubik[]>;

  private destroy$ = new Subject<boolean>();

  constructor(private rubikQuery: RubikQuery, private rubikService: RubikService) {
    this.isLoading$ = rubikQuery.selectLoading();
    this.rubiks$ = rubikQuery.selectAll();
    rubikQuery.selectError().pipe(
      filter(error => !!error),
      takeUntil(this.destroy$)
    ).subscribe(error => alert(error));
  }

  ngOnInit(): void {
    this.rubikService.fetchData().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  trackByFn(item, index): void {
    return index;
  }

}
