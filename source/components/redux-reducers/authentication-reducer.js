import cookie from 'js-cookie';
import { authenticationConstants } from '../redux-constants/authentication-constant';

let user = cookie.get('authentication-token');
const initialState = (user && typeof user === 'string' && user !== "undefined") ? { logged: true, user: cookie.get('authentication-user') } : { logged : false, user: null };

export function authenticationReducer(state = initialState, action) {
    switch(action.type) {
        case authenticationConstants.authenticationRequest : return { logged: false, user: action.user };
        case authenticationConstants.authenticationSuccess : return { logged: true, user: action.user };
        case authenticationConstants.authenticationFailure : return { logged: false, user: action.user };
        default: return state;
    }
}