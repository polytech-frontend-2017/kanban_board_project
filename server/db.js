const src = require('./sourse')

const pgp = require('pg-promise')()
const bcrypt = require('bcrypt')
var dateFormat = require('dateformat')

const db = pgp(src.cn)

function createProject (userId = 5, projectName = 'start_project') {
  db.none('INSERT INTO "Project"("User_id", "Project_name") VALUES($1, $2)', [userId, projectName])
    .then(() => {
      console.info('success')
    })
    .catch((error) => {
      console.info('not success ' + error)
    })
}

function createUser () {
  bcrypt.hash('Legolas', 10, (err, hash) => {
    console.info(hash)
    console.info(err)
    db.none('INSERT INTO "Users"("Login", "Password") VALUES($1, $2)', ['Legolas', hash])
      .then(() => {
        console.info('success')
      })
      .catch((error) => {
        console.info('not success ' + error)
      })
  })
}

function addUserToProject (userId = 7, projectId = 1) {
  db.none('INSERT INTO "User_Project"("Project_id", "User_id") VALUES($1, $2)', [projectId, userId])
    .then(() => {
      console.info('success')
    })
    .catch((error) => {
      console.info('not success ' + error)
    })
}

function addSticker (status, title, desc, date, colour, userId = 7, projectId = 1) {
  db.none(
    'INSERT INTO "Sticker"("Status", "Colour", "Title", "Description", "Date", "User_id", "Project_id")' +
    'VALUES($1, $2, $3, $4, $5, $6, $7)', [status, colour, title, desc, date, userId, projectId])
    .then(() => {
      console.info('success')
    })
    .catch((error) => {
      console.info('not success ' + error)
    })
}

function updateSticker (status, title, desc, date, colour, userId = 7, projectId = 1) {
  db.none(
    'UPDATE "Sticker"' +
    'SET "Status" = $1,  "Colour" = $2, "Title" = $3, "Description" = $4, "Date" = $5 WHERE "Sticker_id" = $6',
    [status, colour, title, desc, date, 1])
    .then(() => {
      console.info('success')
    })
    .catch((error) => {
      console.info('not success ' + error)
    })
}

const green = '#85e996'
const yellow = '#fefb64'
const red = '#ffa5ac'

let card = {
  status: 'start',
  colour: green,
  title: 'It is your 1st sticker',
  desc: 'Let\'s do some tasks! You find them in the left corner =)',
  date: '2018-01-20'
}

module.exports = {
  selectStickers: (projectId = 1) => {
    let result = ''
    db.any('SELECT * FROM "Sticker" WHERE "Project_id" = $1', [projectId])
      .then(function (data) {
        // console.info(data)
        return (data)
      })
      .catch(function (e) {
        console.info(e)
      })
    return result
  }
}