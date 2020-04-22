import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

/*
Notes on sqlite:
executeSql:
SQLitePlugin.prototype.executeSql = function(sstatement, params, success, error) (in sqlite.core.js)
*/

const db_name = "Categories.db";
const db_loc = "Library";

export default class Database {
  initDB() {
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
            db.executeSql('SELECT * FROM Categories').then(() => {
              console.log("Database is ready ... executing query ...");
            }).catch((error) =>{
              console.log("Received error: ", error);
              console.log("Database not yet ready ... populating data");
              db.transaction((tx) => {
                tx.executeSql(
                  `CREATE TABLE IF NOT EXISTS Categories (
                    cat_id INTEGER NOT NULL PRIMARY KEY, 
                    cat varchar(64), 
                    cat_emoji varchar(64))`
                  );
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

  closeDB(db) {
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
      console.log("Database was not OPENED");
    }
  };

  // add one category at a time. How to add several? When to call the several version?
  addCat(aCat) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
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
           