import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { RubikState } from './state';
import { RubikStore } from './store';

@Injectable({ providedIn: 'root' })
@QueryConfig({
    sortBy: 'complexity',
    sortByOrder: Order.ASC
})
export class RubikQuery extends QueryEntity<RubikState> {
    constructor(protected store: RubikStore) {
        super(store);
    }
}
