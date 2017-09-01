const User = require('./user.schema')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

module.exports = {

  signup: (req, res) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(req.body.password, salt)
    User
            .create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              userName: req.body.userName,
              email: req.body.email,
              password: hash
            })
        .then((user) => {
          res.send(user)
        })
  },
  login: (req, res) => {
    User
          .findOne({where: {userName: req.body.userName, password: req.body.password}})
          .then((user) => {
            res.json(user)
          })
          .catch((err) => {
            if (err) {
              console.log('ERROR logging in user: ', err)
            }
          })
  },
  updateProfile: (req, res) => {
    User
          .findOne({where: {userName: req.body.userName}})
          .then((user) => {
            console.log('updateProfile USER: ', user)
            if (user) {
              user
                .updateAttributes({
                  profile_image_url: req.body.profile_image_url,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: req.body.password,
                  phoneNumber: req.body.phoneNumber,
                  userName: req.body.userName,
                  houseNumber: req.body.houseNumber,
                  streetName: req.body.streetName,
                  unitType: req.body.unitType,
                  city: req.body.city,
                  state: req.body.state,
                  zipCode: req.body.zipCode,
                  latitude: req.body.latitude,
                  longitude: req.body.longitude
                })
            }
            res.send(user)
          })
          .catch((err) => {
            if (err) {
              console.log('Error in updateProfile: ', err)
            }
          })
  },
  deleteProfile: (req, res) => {
    User
      .findOne({where: {userName: req.body.userName}})
      .then((user) => {
        console.log('deleteProfile action, USER: ', user)
        if (user) {
          user
            .destroy()
        }
        res.send(user)
      })
  }

}
