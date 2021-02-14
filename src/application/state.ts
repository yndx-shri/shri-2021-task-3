import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { Action } from './actions';
import { createEffects } from './effects';
import { data } from './data';
import { Slide, State } from './types';

const DEFAULT_STATE: State = {
    theme: 'light',
    index: 0,
    progress: 0,
    pause: false,
    stories: [],
};

export function createState(stories: Slide[]): [(a: Action) => void, Observable<State>] {

    const actions$ = new Subject<Action>();

    const state$ = new BehaviorSubject({ ...DEFAULT_STATE, stories });

    createEffects(actions$, state$).subscribe(actions$);

    actions$.pipe(
        withLatestFrom(state$), 
        map(([a, s]) => data(s, a)),
    ).subscribe(state$);

    const dispatch = (action: Action) => actions$.next(action);

    return [dispatch, state$];
}
