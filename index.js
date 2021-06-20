const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./src/config/db');
const helpers = require('./src/helpers/helper');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(helpers.corsHandler);
helpers.setUpProcessHandlers();

const routes = require('./src/routes');
app.use(routes);


// init sequelize
sequelize.sync({
    force: process.env.SEQUELIZE_SYNC_FORCE === "true",
    logging: process.env.SEQUELIZE_SYNC_LOGGING === "true",
    alter: process.env.SEQUELIZE_SYNC_ALTER === "true"
  })
  .then(() => {
    console.log("database sync completed");
    helpers.initData()
  })
  .catch((err) => {
    console.trace(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}!`);
});