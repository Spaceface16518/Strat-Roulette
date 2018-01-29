module.exports.fetchStrat = (paramID) => {
  const sqlite = require('sqlite');
  let id = paramID;
  let db = new sqlite.Database('../data/strats.db', (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Connected to the Strats Database")
  });

  db.serialize((id) => {
    db.get('SELECT * FROM Strats WHERE id === $ID_place_holder', {
      $ID_place_holder: id
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
