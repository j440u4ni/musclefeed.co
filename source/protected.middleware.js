import jwt from 'jsonwebtoken';
import { jwtSecret } from './musclefeed-configuration';
import { personModel } from './musclefeed-models/database';

export function adminIsLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { return response.redirect('/admin-account'); }
        if(decoded) { 
            if(!decoded.hasOwnProperty('adminID')) { next(); return; }
            personModel.findOne({ where: { id: decoded.adminID, is_admin: true }}).then((admin) => { if(!admin) { return response.redirect('/admin-account'); } next(); return; }); }
    });
}
export function adminIsNotLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { next(); return; }
        if(decoded) {
            if(!decoded.hasOwnProperty('adminID')) { next(); return; }
            personModel.findOne({ where: { id: decoded.adminID, is_admin: true }}).then((admin) => { if(!admin) { next(); return; } return response.redirect('/admin-dashboard'); }); }
    });
}

export function userIsLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { return response.redirect('/user-account'); }
        if(decoded) { 
            if(!decoded.hasOwnProperty('userID')) { next(); return; }
            personModel.findOne({ where: { id: decoded.userID }}).then((admin) => { if(!admin) { return response.redirect('/user-account'); } next(); return; }); }
    });
}
export function userIsNotLogged(request, response, next) {
    return jwt.verify(request.cookies['authentication-token'], jwtSecret, (error, decoded) => {
        if(error) { next(); return; }
        if(decoded) {
            if(!decoded.hasOwnProperty('userID')) { next(); return; }  
            personModel.findOne({ where: { id: decoded.userID }}).then((user) => { if(!user) { next(); return; } return response.redirect('/user-dashboard'); }); }
    });
}