const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      titulo TEXT,
      estado TEXT
    )
  `);
});

class Document {

  static create(titulo) {
    return new Promise((resolve, reject) => {

      const id = uuidv4();
      const estado = 'CREADO';

      db.run(
        'INSERT INTO documents VALUES (?,?,?)',
        [id, titulo, estado],
        err => {
          if (err) reject(err);
          else resolve({ id, titulo, estado });
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM documents', [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM documents WHERE id=?',
        [id],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  }

  static updateState(id, estado) {
    return new Promise((resolve, reject) => {

      db.run(
        'UPDATE documents SET estado=? WHERE id=?',
        [estado, id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes ? { id, estado } : null);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {

      db.run(
        'DELETE FROM documents WHERE id=?',
        [id],
        function (err) {
          if (err) reject(err);
          else resolve(this.changes > 0);
        }
      );
    });
  }
}

module.exports = Document;
