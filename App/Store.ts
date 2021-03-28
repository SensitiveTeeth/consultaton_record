import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkDispatch as OldThunkDispatch } from 'redux-thunk';
import { AuthActions } from "./redux/auth/actions";
import { authReducer, AuthState } from "./redux/auth/reducer";

export interface RootState {
    auth: AuthState;
}

export type RootActions = AuthActions;

const rootReducer = combineReducers({
    auth: authReducer,
})

export type ThunkDispatch = OldThunkDispatch<RootState, null, RootActions>

const composeEnhancers = (global as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<RootState, RootActions, {}, {}>(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
))