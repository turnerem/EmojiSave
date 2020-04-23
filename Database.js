import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

/*
Notes on sqlite:
executeSql:
SQLitePlugin.prototype.executeSql = function(sstatement, params, success, error) (in sqlite.core.js)
*/

const db_name = "VBank.db";
const db_loc = "Library";

export default class Database {
  createTableFor = {
    Categories: 
      `CREATE TABLE IF NOT EXISTS Categories (
        cat_id INTEGER NOT NULL PRIMARY KEY, 
        cat varchar(64), 
        cat_emoji varchar(64))`,
    SpendEvents:
      `CREATE TABLE IF NOT EXISTS SpendEvents (
        event_id INTEGER NOT NULL PRIMARY KEY,
        cat_id INTEGER NOT NULL FOREIGN KEY REFERENCES Categories(cat_id),
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        amount DOUBLE(10, 2))`,
    SpendEvents:
      `CREATE TABLE IF NOT EXISTS SpendEvents (
        event_id INTEGER NOT NULL PRIMARY KEY,
        cat_id INTEGER NOT NULL FOREIGN KEY REFERENCES Categories(cat_id),
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        amount DOUBLE(10, 2))`,
      
  }
  initDbFor(tab) {
    let db;
    return new Promise((resolve) => {
      console.log("Plugin integrity check...");
      SQLite.echoTest()
        .then(() => {
          console.log("Integrity check passed...");
          SQLite.openDatabase({
            name: db_name,
            location: db_loc
          })
          .then(res => {
            db = res;
            console.log("Database OPEN");
            db.executeSql(`SELECT * FROM ?`, [tab]).then(() => {
              console.log("Database is ready ... executing query ...");
            }).catch((error) =>{
              console.log("Received error: ", error);
              console.log("Database not yet ready ... populating data");
              db.transaction((tx) => {
                tx.executeSql(this.createTableFor[tab]);
                // tx.executeSql(
                //   `CREATE TABLE IF NOT EXISTS Categories (
                //     cat_id INTEGER NOT NULL PRIMARY KEY, 
                //     cat varchar(64), 
                //     cat_emoji varchar(64))`);
              }).then(() => {
                console.log("Table created successfully");
               }).catch(error => {
                 console.log(error);
               });
            });
            resolve(db);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log("echoTest failed - plugin not functional");
      });
    });
  };

  closeDb(db) {
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("Database was not OPEN");
    }
  };

  getAllTab(tab) {
    return new Promise((resolve) => {
      // const data = [];
      this.initDbFor(tab).then((db) => {
        db.transaction((tx) => {
          tx.executeSql(`SELECT * FROM ?`, [tab])
        }).then(([tx, res]) => {
          console.log(res.rows.length, 'row count in TAB')
        }).then((res) => {
          this.closeDb(db);
        }).catch((err) => {
          console.log(err)
        })
      }).catch((err) => {
        console.log('the Last Err', err)
      })
    })
  }

  // add one category at a time. How to add several? When to call the several version?
  addCat(someCats) {
    return new Promise((resolve) => {
      this.initDbFor("Categories").then((db) => {
        db.transaction((tx) => {
          tx.executeSql(
            `INSERT INTO Categories (cat, cat_emoji) VALUES (?, ?)`,
            [aCat.cat, aCat.catEmoji])
            .then(([tx, res]) => {
              resolve(res);
            })
          }).then((res) => {
            this.closeDB(db);
          }).catch((err) => {
            console.log(err);
          })
        }).catch((err) => {
          console.log(err)
        })
      })
    }

  

  /*
  syntax for multiple rows: 
  INSERT INTO table_name (col_list)
  VALUES 
    (value_list_1),
    (value_list_2),
    (...);
  */

 
};              
          