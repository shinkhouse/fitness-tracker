import * as fromUi from './core/services/ui/ui.reducer';
import * as fromAuth from './core/services/auth/auth.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
export interface State {
    ui: fromUi.State,
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
    ui: fromUi.uiReducer,
    auth: fromAuth.authReducer
}

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getISloading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);