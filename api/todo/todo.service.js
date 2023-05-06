const db = require("../../config/connection");
module.exports = {
  add: (data, callBack) => {
    db.query(`insert into todos set ?`, [data], (err, results) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },

  get: (callBack) => {
    db.query(`select * from todos`, [], (err, results) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },

  getId: (data, callBack) => {
    db.query(
      `select * from todos where todos_id = ?`,
      [data],
      (err, results) => {
        if (err) {
          return callBack(err);
        } else {
          return callBack(null, results);
        }
      }
    );
  },

  update: (data, callBack) => {
    db.query(
      `select * from todos where todos_id=?`,
      [data.todos_id],
      (err, results) => {
        if (err) {
          return callBack(err);
        } else {
          db.query(`update todos set ? where todos_id = ?`, [
            data,
            data.todos_id,
          ]);
          return callBack(null, results[0]);
        }
      }
    );
  },

  del: (data, callBack) => {
    db.query(
      `select todos_id from todos where todos_id = ?`,
      [data],
      (err, results) => {
        if (err) {
          return callBack(err);
        } else {
          db.query(`delete from todos where todos_id = ?`, [data]);
          return callBack(null, results[0]);
        }
      }
    );
  },
};
