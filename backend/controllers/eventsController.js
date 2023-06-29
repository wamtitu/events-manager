const { VarChar, Int } = require('msnodesqlv8');
const config = require('./../config');
const sql = require('mssql');
const { Transaction } = require('mssql');


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

exports.getOneEvent = async (req, res) => {
  try{
    const {id} = req.params;
    let pool = await sql.connect(config.sql);
  const result = await pool.request().query(`SELECT * FROM dbo.events WHERE eventID = ${id}`)
  res.status(200).json(result.recordsets[0])
  }catch(error){
    res.status(200).send(error)
  }finally{
    sql.close();
  }
  
};

exports.getFiveEvents = async (req, res)=>{
  try {
    const pool = await sql.connect(config.sql)
    const results = await pool.request().query('SELECT TOP 5 name, location, description, images FROM events')
    res.status(200).json(results)
  } catch (error) {
    console.log(error)
  }
}
exports.getOnlineEvents = async (req, res)=>{
  try {
    const pool = await sql.connect(config.sql)
    const results = await pool.request().query("SELECT * FROM events WHERE location = 'online'")
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

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
    res.json(error)
  }

}
exports.updateEvent = async (req, res)=>{
  try {
    const id = req.params.id;
    const{name,location,hostID,eventdate,images,description} = req.body;
    let pool = await sql.connect(config.sql);
    const updatedEvent = await pool.request()
    .input("name", sql.VarChar, name)
    .input("location", sql.VarChar, location)
    .input("hostID", sql.Int, hostID)
    .input("eventdate", sql.DateTime2, eventdate)
    .input("images", sql.VarChar, images)
    .input("description", sql.VarChar, description)
    .query(`UPDATE events
    SET name = @name,
        location = @location,
        hostID = @hostID,
        eventdate = @eventdate,
        images = @images,
        description = @description
    WHERE eventID = ${id};
    `)
    res.status(200).json(updatedEvent)
    
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}

exports.deleteEvent = async (req, res) => {
  try{
    const {id} = req.params;
    let pool = await sql.connect(config.sql);
  const result = await pool.request().query(`DELETE FROM dbo.events WHERE eventID = ${id}`)
  res.status(200).send('deleted')
  }catch(error){
    res.status(200).send(error)
  }finally{
    sql.close();
  }
  
};

// Assuming you have already established a connection to the database



