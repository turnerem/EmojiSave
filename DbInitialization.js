import SQLite from "react-native-sqlite-storage";

export class DbInitialization {

  updateDbTables() {
    SQLite.openDatabase({
      name: VBank.db,
      location: "Library"
    }).then((db) => {
      console.log("Database OPEN");
      db.transaction(this.createTables)
    })
  } 

  createTables(tx) {
    // categories
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Categories (
        cat_id INTEGER NOT NULL PRIMARY KEY, 
        cat varchar(64), 
        cat_emoji varchar(64)
      )`
    );

    // spend events
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS SpendEvents (
        event_id INTEGER NOT NULL PRIMARY KEY,
        cat_id INTEGER NOT NULL FOREIGN KEY REFERENCES Categories(cat_id),
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        amount DOUBLE(10, 2)
      )`
    );

    // save events
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS SpendEvents (
        event_id INTEGER NOT NULL PRIMARY KEY,
        cat_id INTEGER NOT NULL FOREIGN KEY REFERENCES Categories(cat_id),
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        amount DOUBLE(10, 2)
      )`
    );

    // version (app version, useful for updates)
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Version (
        version_id INTEGER PRIMARY KEY NOT NULL,
        version INTEGER
      )`
    )
  }

  getDbVersion(db) {
    return new Promise((resolve) => {
      // promise resolve?? I don't understand. Compare it to promise-based stuff that I do understand
    })
  }
}


