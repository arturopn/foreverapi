module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "1q2w3e4r",
  DB: "foreverus",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
