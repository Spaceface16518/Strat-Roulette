module.exports.getHighestID = () => {
  const sqlite3 = require('sqlite3');
  let db = new sqlite3.Database('../data/strats.db', (err) => {
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
      console.error(err);
    }
    console.log('Disconnected from the Strats Database');
  });
}
