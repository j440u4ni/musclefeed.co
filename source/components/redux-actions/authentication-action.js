import cookie from 'js-cookie';

import { authenticationConstants } from '../redux-constants/authentication-constant';
import { authenticateService, registerService } from '../redux-helpers/authentication-helper';
import { showWarning, showSuccess } from '../fragments-tools/alert-toasts';

export function authenticate(email, password, admin, reset, router) {
    return (dispatch) => {
        authenticateService(email, password, admin).then((first) => { return first; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { reset(); showWarning("Authentification échoué."); }
            else { 
                   if(admin === true) { cookie.set('authentication-token', second.data.retrieveAdminAccount.authenticateToken); cookie.set('authentication-user', JSON.stringify(second.data.retrieveAdminAccount)); }
                   else { cookie.set('authentication-token', second.data.retrieveGuestAccount.authenticateToken); cookie.set('authentication-user', JSON.stringify(second.data.retrieveGuestAccount));  }
                   (admin === true) ? router.push('/admin-dashboard') : router.push('/user-dashboard');
            } 
         });
    }

    function request() { return { type: authenticationConstants.authenticationRequest, user: null }; }
    function failure() { return { type: authenticationConstants.authenticationFailure, user: null }; } 
    function success() { return { type: authenticationConstants.authenticationSuccess, user: user }; }
}

export function register(civility, firstname, lastname, email, password, phone, cancel) {
    return (dispatch) => {
        registerService(civility, firstname, lastname, email, password, phone).then((first) => { return first; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { dispatch(failure()); showWarning("Inscription échoué."); cancel(); }
            else { dispatch(success()); cancel(); window.location.reload(); showSuccess("Inscription avec succès.");  } 
         });
    }

    function request() { return { type: authenticationConstants.registerRequest }; }
    function failure() { return { type: authenticationConstants.registerFailure  }; } 
    function success() { return { type: authenticationConstants.registerSuccess }; }
}