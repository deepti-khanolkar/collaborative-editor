const connection = require('./connection')

function getData (db = connection) {
  return db('data').select()
}

function addData (content, db = connection) {
  return db('data')
    .insert({
      content: content
    })
}

module.exports = {
  getData,
  addData
}