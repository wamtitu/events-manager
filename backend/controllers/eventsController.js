const { VarChar, Int } = require('msnodesqlv8');
const config = require('./../config');
const sql = require('mssql');


exports.getEvents = async (req, res) => {
  try{
    let pool = await sql.connect(config.sql);
  const result = await pool.request().query(`SELECT * FROM dbo.events`)
  res.status(200).json(result.recordsets[0])
  }catch(error){
    res.status(200).send(error)
  }finally{
    sql.close();
  }
  
};

exports.createEvent = async (req,res)=>{
  try {
    const{name,location,hostID,eventdate,images,description} = req.body;
    let pool = await sql.connect(config.sql);
    const newEvent = await pool.request()
    .input("name", sql.VarChar, name)
    .input("location", sql.VarChar, location)
    .input("hostID", sql.Int, hostID)
    .input("eventdate", sql.DateTime2, eventdate)
    .input("images", sql.VarChar, images)
    .input("description", sql.VarChar, description)
    .query(`INSERT INTO dbo.events(name, location, hostID, eventdate, images, description)VALUES(@name, @location, @hostID, @eventdate, @images, @description)`)  
    
    res.status(200).json(newEvent)
  } catch (error) {
    console.log(error)
    res.json(error)
  }

}
exports.updateEvent = async (req, res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
