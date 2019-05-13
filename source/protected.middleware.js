import jwt from 'jsonwebtoken';
import { jwtSecret } from './musclefeed-configuration';
import { personModel } from './musclefeed-models/database';

export function adminIsLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { return response.redirect('/admin-account'); }
        if(decoded) {  personModel.findOne({ where: { id: decoded.adminID, is_admin: true }}).then((admin) => { if(!admin) { return response.redirect('/admin-account'); } next(); return; }); }
    });
}
export function adminIsNotLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { next(); return; }
        if(decoded) {  personModel.findOne({ where: { id: decoded.adminID, is_admin: true }}).then((admin) => { if(!admin) { next(); return; } return response.redirect('/admin-dashboard'); }); }
    });
}