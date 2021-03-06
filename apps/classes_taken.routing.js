// linking to the classes_taken.controller.js file
const classes_taken = require("./classes_taken.controller.js");

//setting up endpoints for the classes_taken table
module.exports = app => {
  app.post("/classes_taken", classes_taken.create);
  app.get("/classes_taken", classes_taken.getAll);
  app.get("/classes_taken:userID",classes_taken.selectbyID)
};
