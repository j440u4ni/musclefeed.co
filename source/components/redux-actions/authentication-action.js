import cookie from 'js-cookie';

import { authenticationConstants } from '../redux-constants/authentication-constant';
import { authenticateService } from '../redux-helpers/authentication-helper';
import { showWarning } from '../fragments-tools/alert-toasts';

export function authenticate(email, password, admin, reset, router) {
    return (dispatch) => {
        authenticateService(email, password, admin).then((first) => { return first; })
        .then((second) => {
            if(second.hasOwnProperty('errors')) { reset(); showWarning("Authentification échoué."); }
            else { cookie.set('authentication-token', second.data.retrieveAdminAccount.authenticateToken);
                   cookie.set('authentication-user', JSON.stringify(second.data.retrieveAdminAccount));
                   router.push('/admin-dashboard');
            } 
         });
    }

    function request() { return { type: authenticationConstants.authenticationRequest, user: null }; }
    function failure() { return { type: authenticationConstants.authenticationFailure, user: null }; } 
    function success() { return { type: authenticationConstants.authenticationSuccess, user: user }; }
}