const dotenv = require ('dotenv');
dotenv.config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT, JWT_SECRET} = process.env;

const config = {
    port: PORT,
    JWT_SECRET: JWT_SECRET,
    sql:{
        user: DB_USER,
        password: DB_PASSWORD,
        server: DB_HOST,
        database: DB_DATABASE,
        options: {
            trustedConnection: true,
            encrypt: false,
            enableArithAbort: true,
            trustServerCertificate:true,
    }
    }
}
module.exports = config