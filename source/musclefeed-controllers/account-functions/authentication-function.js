import jwt from 'jsonwebtoken';
import validator from 'validator';

import { saltSync, bcrypt, jwtSecret } from '../../musclefeed-configuration';
import { personModel } from '../../musclefeed-models/database';

export function authenticateAdmin(source, args, context, info) {
    return personModel.findOne({ where: { email: args.email, is_admin: true }}).then((admin) => { 
        if(!admin) { return false; }
        const match = bcrypt.compareSync(args.password, admin.password); if(!match) { return false; }
        const token = jwt.sign({ adminID: admin.id, admin: admin }, jwtSecret, { issuer: "Muscle Feed Company", expiresIn: "168h" } ); admin["authenticateToken"] = token; return admin; 
    });
}

export function authenticateGuest(source, args, context, info) {
    return personModel.findOne({ where: { email: args.email }}).then((user) => { 
        if(!user) { return false; }
        const match = bcrypt.compareSync(args.password, user.password); if(!match) { return false; }
        const token = jwt.sign({ userID: user.id, user: user }, jwtSecret, { issuer: "Muscle Feed Company", expiresIn: "168h" } ); user["authenticateToken"] = token; return user;
    });
}

export function registerGuest(source, args, context, info) {
    if(!validator.isEmail(args.email)) { throw new Error('E-mail invalid'); }
    if(args.firstname.length < 2 || args.lastname.length < 2 || args.password.length < 6) { throw new Error('Password invalid'); }
    if(!validator.isMobilePhone(args.phone, ['fr-FR', 'en-US'])) { throw new Error('Mobile Phone invalid'); }
        const token = bcrypt.hashSync(args.password + args.firstname + args.lastname + args.email + new Date().getTime()) ; const password = bcrypt.hashSync(args.password); const username = '_' + Math.random().toString(36).substring(7);
        return personModel.create({ firstname: args.firstname, lastname: args.lastname, username: username, email: args.email, password: password, token: token, civility: args.civility, phone: args.phone });
}