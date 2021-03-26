import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { RouterState, RouterAction, connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from 'history';
import thunk, { ThunkDispatch as OldThunkDispatch } from 'redux-thunk';
import { AuthState, authReducer } from './redux/auth/reducer'
import { AuthActions } from "./redux/auth/actions";

export const history = createBrowserHistory();

export interface RootState {
    auth: AuthState,
    router: RouterState,

}

export type RootActions = RouterAction | AuthActions;

const reducers = combineReducers<RootState>({
    auth: authReducer,
    router: connectRouter(history),
})



declare global {
    /* tslint:disable:interface-name */
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

export type ThunkDispatch = OldThunkDispatch<RootState, SVGFEGaussianBlurElement, RootActions>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))

))