'use strict';
const mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'ta78na',
    password: 'ta78na',
    database: 'maple',
});

con.connect();

// con.query('SHOW TABLES;', (error, res, fields) => {
//     if(error){
//         throw error;
//     }
//     console.log(`Response: ${console.table(res)}, Fields: ${console.table(fields)}`);
// });

// let mangas;
// const QUERY = 'SELECT * FROM manga;';
// con.query(QUERY, (err, res, fields) => {
//     if(err){
//       console.log(`Error occurred when trying to get manga information from database: ${err.message}`);
//       return;
//     }
//     console.log(res);
//     console.table(res);
//     mangas = res;
//     for (let manga in mangas){
//         console.log(mangas[manga].manga_id, mangas[manga].manga_name, mangas[manga].url, mangas[manga].cover_url, mangas[manga].update_time);
//     }
//     mangas.forEach(element => {
//         console.log(element.url);
//     });
// })
let usr = 'ta78na';
const query_subscription = `SELECT * FROM manga AS m WHERE m.manga_id IN (SELECT sub.manga_id FROM subscription AS sub JOIN user AS u WHERE sub.user_id = u.user_id AND u.user_name = '${ usr }');`;
let mangas;
con.query(query_subscription, (err, res, fields) => {
  if(err){
    console.log(`Error occurred when trying to get subscription information from database: ${err.message}`);
    return;
  }
  mangas = res;
  console.log(typeof res);
});
while(!mangas){}
console.log(mangas);

con.end();