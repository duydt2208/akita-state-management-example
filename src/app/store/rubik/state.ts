import { EntityState } from '@datorama/akita';
import { Rubik } from './../../models';

export interface RubikState extends EntityState<Rubik, string> { }

export const initialState: RubikState = {
    entities: {},
    ids: [],
    loading: false,
    error: null
};
