const Sequelize = require('sequelize')

const DBConnection = new Sequelize('postgres://shurepmn:6d4imE8aMzjoDPk2hglDH9IWB08PzpMc@stampy.db.elephantsql.com:5432/shurepmn')

//Connection testing

DBConnection
    .authenticate()
    .then(()=> {
        console.log('DB connection successful')
    })
    .catch((err)=> {
        console.log('DB connection ERROR: ', err)
    })

    module.exports = DBConnection