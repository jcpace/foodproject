const Sequelize = require('sequelize');

// Please create a credential.json file with your username and password for your cloud DB.
// Refer to sampleCredentials.json
const creds = require('./credentials');

const DBURL = `postgres://${creds.username}:${creds.password}@stampy.db.elephantsql.com:5432/${creds.username}`;

// possible local running of DB. Still working on getting it to connect. For now, use uri
// const sequelize = new Sequelize(
//   {
//     database: 'tester',
//     username: 'jpace',
//     password: null,
//     host: 'localhost',
//     port: 8001,
//     dialect: 'postgres',
//     operatorsAliases: false
//   }
// )

const sequelize = new Sequelize(DBURL, {
  operatorsAliases: false
});

// DB Connection Testing

sequelize
    .authenticate()
    .then(() => {
      console.log('DB connection successful')
    })
    .catch((err) => {
      console.log('DB connection ERROR: ', err)
    });

module.exports = sequelize;
