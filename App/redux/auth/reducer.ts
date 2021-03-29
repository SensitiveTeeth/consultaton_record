import { User, AuthActions } from "./actions"


export interface AuthState {
    isAuthenticated: Boolean | null;
    token: string | null;
    user: User | null;
    message: string | null
}

const initialState: AuthState = {
    isAuthenticated: null,
    token: null,
    user: null,
    message: null
}

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case '@@auth/LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                user: action.user,
            }
        case '@@auth/LOGIN_FAILED':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                message: action.message
            }
        case '@@auth/CLEAR_ERROR':
            return {
                ...state,
                message: null,
            }

        case '@@auth/LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null
            }
        default:
            return state;
    }
}