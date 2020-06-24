import React from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('covid_guests', null, null, null)

const migrations = [
  `
    CREATE TABLE IF NOT EXISTS guests (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL
    );
  `.trim()
];

db.transaction(txn => {
  txn.executeSql('PRAGMA user_version;', [], (_, { rows: { _array: [{ user_version }] } }) => {
    console.log(" ");
    console.log("Migrations");
    console.log("==========");

    const version = user_version;
    const nextVersion = migrations.length;
    console.log(`Current version: ${version}`);
    console.log(`Next version:    ${nextVersion}`);

    if (version === nextVersion) {
      console.log('No migrations necessary');
      return
    }

    if (version > nextVersion) {
      console.error('Current version > next version');
      return
    }

    migrations.forEach((migration, i) => {
      console.log(`Migrating ${i}`);
      txn.executeSql(migration, [], (_txn, resultSet) => {
      }, (_txn, error) => {
        console.log(error);
      });
    });

    txn.executeSql(`PRAGMA user_version = ${nextVersion}`);
  });
});

const DatabaseContext = React.createContext(db);
export default DatabaseContext;
