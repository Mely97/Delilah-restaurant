let Sequelize = require("sequelize");
let db_data = require("./database");
let conexion = new Sequelize(
  db_data.conf_db_name,
  db_data.conf_user,
  db_data.conf_password,
  {
    host: db_data.conf_db_host,
    dialect: "mysql",
    port: db_data.conf_port,
    dialectOptions: {
      multipleStatements: true,
    },
  }
);
module.exports = conexion;
