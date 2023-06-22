// const sql = require('mssql');
const config = require('./config')
const routes = require('./routes/eventsRoute')
const express = require('express');
const cors = require('cors');

const app = express();

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//   async function connectToDatabase() {
//     try {
//       await sql.connect(config.sql);
//       const result = await sql.query`SELECT * FROM dbo.users`;
//       console.log(result.recordset);
//       console.log(`connected to ${config.sql.database}`);
//       // await queryDatabase();
//       // Perform database operations here
//     } catch (error) {
//       console.error('Error connecting to SQL Server:', error);
//     }
//   }
  
//  connectToDatabase();

//  async function queryDatabase() {
//   try {
//     const result = await sql.query`SELECT * FROM dbo.Employee`;
//     console.log(result.recordsets);
//   } catch (error) {
//     console.error('Error executing query:', error);
//   }
// }

// queryDatabase();

routes(app);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});


    
