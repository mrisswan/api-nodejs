const db = require("../../config/connection");
module.exports = {
  add: (data, callBack) => {
    db.query(`insert into activities set ?`, [data], (err, results) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },

  get: (callBack) => {
    db.query(`select * from activities`, [], (err, results) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },

  getId: (data, callBack) => {
    db.query(
      `select * from activities where activity_id = ?`,
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
      `select * from activities where activity_id=?`,
      [data.activity_id],
      (err, results) => {
        if (err) {
          return callBack(err);
        } else {
          db.query(`update activities set ? where activity_id = ?`, [
            data,
            data.activity_id,
          ]);
          return callBack(null, results[0]);
        }
      }
    );
  },

  del: (data, callBack) => {
    db.query(
      `select activity_id from activities where activity_id = ?`,
      [data],
      (err, results) => {
        if (err) {
          return callBack(err);
        } else {
          db.query(`delete from activities where activity_id = ?`, [data]);
          return callBack(null, results[0]);
        }
      }
    );
  },
};
