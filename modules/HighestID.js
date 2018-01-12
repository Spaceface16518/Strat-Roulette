module.exports.getHighestID = () => {
  const sqlite3 = require('sqlite3');
  let db = new sqlite3.Database(':memory:', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Connected to the Strats Database")
  });

  db.get('SELECT MAX(id) AS max_id FROM Strats', (err, row) => {
    if (err) {
      console.error(err);
    }
    return row.max_id;
  })

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Disconnected from the Strats Database');
  });
}