module.exports.fetchStrat = (paramID) => {
  const sqlite3 = require('sqlite3');
  let id = paramID // id(variable) = id(parameter)
  let db = new sqlite3.Database('../data/strats.db', (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Connected to the Strats Database")
  });

  db.serialize((id) => {
    db.get('SELECT * FROM Strats WHERE id === $ID_place_holder', {
      $ID_place_holder = id
    }, (err, rows) => {
      if (err) {
        console.error(err);
      }
      return rows;
    })
  })

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Disconnected from the Strats Database');
  });
}