const jwt = require('jsonwebtoken');
const sql = require('mssql');
const bcrypt = require('bcrypt');
const config = require('../config');
const { VarChar } = require('msnodesqlv8');

exports.register = async (req, res)=>{
   
    try {
        const{fullname, email, userPassword, } = req.body;
        const hashedPassword = bcrypt.hashSync(userPassword, 12);
        const pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('fullname', sql.VarChar, fullname)
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM dbo.users WHERE fullname = @fullname OR email = @email');
        const user = result.recordset[0];
        if (user) {
            res.status(409).json({ error: 'User already exists' });
           console.log("user already exist")
        } else{
            const newUser=await pool.request()
            .input("fullname", sql.VarChar, fullname)
            .input("hashedPassword", sql.VarChar, hashedPassword)
            .input("email", sql.VarChar, email)
            .query('INSERT INTO dbo.users(fullname, userPassword, email) VALUES(@fullname, @hashedPassword, @email)' )
            res.status(200).json(newUser.recordsets);
        }
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}

exports.login= async (req, res)=>{
    try {
        const {email, password} = req.body;
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        .input('email', sql.VarChar, email)
        .query(`SELECT * FROM users WHERE email = @email`)
        const user = result.recordset[0];
        if(!user){
            res.send('invalid email')
        }else{
            if(!bcrypt.compareSync(password, user.userPassword)){
                res.send('check your credentials')
            }
            else{
                const token = `JWT ${jwt.sign({fullname: user.fullname, email: user.email}, config.JWT_SECRET)}`
                res.json({email: user.email, fullname: user.fullname, id: user.userId, token: token})
            }
        }
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}