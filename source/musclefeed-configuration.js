import bcrypt from 'bcryptjs';

const saltSync = bcrypt.genSaltSync(10, (error, salt) => { return salt; });
const jwtSecret = '$2b$10$LrCfIc4VmkY2J1Riij5yjOM4mCdFXZR8NW0/7Oob7kSrWNRIPodse';
const stripePublishable = 'pk_live_9WY2shJjiy2xcQsWLD26mxRK';
export { saltSync, bcrypt, jwtSecret, stripePublishable };
