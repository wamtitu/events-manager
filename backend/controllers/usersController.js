const config = require('./../config');
const sql = require('mssql');


exports.getUsers = async (req, res) => {
  try{
    let pool = await sql.connect(config.sql);
  const result = await pool.request().query(`SELECT * FROM dbo.users`)
  res.status(200).json(result)
  }catch(error){
    res.status(200).send(error)
  }finally{
    sql.close();
  }
  
};

// exports.createEvent = async (req,res)=>{
//   try {
//     const{name,location,hostID,eventdate} = req.body;
//     let pool = await sql.connect(config.sql);
//     const newEvent = await pool.request()
//     .input("name", sql.VarChar, name)
//     .input("location", sql.VarChar, location)
//     .input("hostID", sql.Int, hostID)
//     .input("eventdate", sql.DateTime2, eventdate)
//     .query(`INSERT INTO dbo.events(name, location, hostID, eventdate)VALUES(@name, @location, @hostID, @eventdate)`)  
    
//     res.status(200).json(newEvent)
//   } catch (error) {
//     console.log(error)
//     res.json(error)
//   }

// }