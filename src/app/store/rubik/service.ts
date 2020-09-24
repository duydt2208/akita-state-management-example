import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Rubik } from 'src/app/models';
import { RubikStore } from './store';

@Injectable({ providedIn: 'root' })
export class RubikService {
    constructor(private rubikStore: RubikStore) { }

    fetchData(): Observable<Rubik[]> {
        this.rubikStore.setLoading(true);
        return of(RUBIK_DATASOURCE).pipe(
            tap((rubiks: Rubik[]) => this.rubikStore.set(rubiks)),
            tap(_ => this.rubikStore.setLoading(false))
        );
    }
}

const RUBIK_DATASOURCE: Rubik[] = [{
    price: 15,
    name: '3x3x3',
    complexity: 10
}, {
    price: 14,
    name: '4x4x4',
    complexity: 100
}, {
    price: 16,
    name: '5x5x5',
    complexity: 101
}, {
    price: 10,
    name: '2x2x2',
    complexity: 1
}];
