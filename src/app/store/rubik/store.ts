import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Rubik } from 'src/app/models';
import { initialState, RubikState } from './state';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rubik', resettable: true, idKey: 'name' })
export class RubikStore extends EntityStore<RubikState, Rubik> {
    constructor() {
        super(initialState);
    }
}
