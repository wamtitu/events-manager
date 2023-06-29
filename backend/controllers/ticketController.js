const config = require('./../config');
const sql = require('mssql');

exports.getTickets = async (req, res) => {
    try{
      let pool = await sql.connect(config.sql);
    const result = await pool.request().query(`SELECT * FROM dbo.tickets WHERE availabilitystatus = 1 `)
    const ticket = result.recordset[0]
    res.json(ticket)
    if(ticket){
      const id = ticket.ticketID
      console.log(id)
      await pool.request().query(`UPDATE tickets SET availabilitystatus = 0 WHERE ticketID = ${id}`)
    }else{
      console.log('no available tickets')
    }
    }catch(error){
      res.status(200).send(error)
    }finally{
      sql.close();
    }
    
  };
  exports.createTickets = async (req,res)=>{
    try {
      const{eventID, availabilitystatus, price} = req.body;
      let pool = await sql.connect(config.sql);
      const newTickets = await pool.request()
      .input("eventID", sql.Int, eventID)
      .input("availabilitystatus", sql.Bit, availabilitystatus)
      .input("price", sql.Int, price)
      .query(`INSERT INTO dbo.tickets(eventID, availabilitystatus, price)VALUES(@eventID, @availabilitystatus, @price)`)  
      
      res.status(200).json(newTickets)
    } catch (error) {
      console.log(error)
      res.json(error)
    }
}