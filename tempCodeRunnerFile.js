let mangas;
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