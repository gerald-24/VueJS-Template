const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");
const router = express.Router();
const _ = require("lodash");
const Excel = require("exceljs");
const mssql = require("mssql");
router.use(cors()); //Cross-Origin Resource Sharing (CORS)
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
router.use(bodyParser.json());
var knex_hrdsql_HrdInfo = require('knex')({
  client: 'mssql',
  connection: {
    host: 'hrdsql',
    user: 'sa',
    password: '81at84',
    database: 'HrdInformationService',
    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
      idleTimeoutMillis: 300000,
      max: 100
    }
  },
})


//login
router.get("/api/sample", (req, res) => {
    let data = `You send IDno. ${req.query.idno}`
    res.send(data)
});

module.exports = router;