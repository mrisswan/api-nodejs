const { add, get, getId, update, del } = require("./activity.service");

module.exports = {
  controllerAdd: (req, res) => {
    const activities = {
      title: req.body.title,
      email: req.body.email,
    };
    add(activities, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.status(200).json({
          success: 1,
          data: results,
          activities,
        });
      }
    });
  },

  controllerGet: (req, res) => {
    get((err, results) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  controllerGetId: (req, res) => {
    const body = req.body.activity_id;
    getId(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  controllerUpdate: (req, res) => {
    const activities = {
      title: req.body.title,
      email: req.body.email,
    };
    update(activities, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,

          message: "Not Found",
        });
      } else {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  controllerDelete: (req, res) => {
    const body = req.body.title;
    del(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.json({
          success: 0,
          message: "Not Found",
        });
      } else {
        return res.json({
          success: 1,
          message: "Delete Success",
        });
      }
    });
  },
};
