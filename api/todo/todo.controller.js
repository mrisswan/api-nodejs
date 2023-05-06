const { add, get, getId, update, del } = require("./todo.service");

module.exports = {
  controllerAdd: (req, res) => {
    const todos = {
      activity_group_id: req.body.activity_group_id,
      title: req.body.title,
      priority: req.body.priority,
      is_active: req.body.is_active,
    };
    add(todos, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.status(200).json({
          success: 1,
          data: results,
          todos,
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
    const body = req.body.todos_id;
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
    const todos = {
      activity_group_id: req.body.activity_group_id,
      title: req.body.title,
      priority: req.body.priority,
      is_active: req.body.is_active,
    };
    update(todos, (err, results) => {
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
    const body = req.body.todos_id;
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
