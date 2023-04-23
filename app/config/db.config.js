module.exports = {
  HOST: "containers-us-west-85.railway.app",
  USER: "root",
  PASSWORD: "XCH9SO59Lyk9mnPnx9UE",
  DB: "railway",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
