import { saltSync, bcrypt, jwtSecret } from '../../musclefeed-configuration';
import { personModel } from '../../musclefeed-models/database';
import jwt from 'jsonwebtoken';

export function authenticateAdmin(source, args, context, info) {
    return personModel.findOne({ where: { email: args.email, is_admin: true }}).then((admin) => { 
        if(!admin) { return false; }
        const match = bcrypt.compareSync(args.password, admin.password); if(!match) { return false; }
        const token = jwt.sign({ adminID: admin.id, admin: admin }, jwtSecret, { issuer: "Muscle Feed Company", expiresIn: "168h" } ); admin["authenticateToken"] = token; return admin; 
    });
}

export function authenticateGuest(source, args, context, info) {
    return personModel.findOne({ where: { email: args.email, is_admin: false }}).then((user) => { 
        if(!user) { return false; }
        const match = bcrypt.compareSync(args.password, user.password); if(!match) { return false; }
        const token = jwt.sign({ userID: user.id, user: user }, jwtSecret, { issuer: "Muscle Feed Company", expiresIn: "168h" } ); user["authenticateToken"] = token; return user;
    });
}