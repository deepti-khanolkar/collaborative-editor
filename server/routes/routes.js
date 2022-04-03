const db = require('../db/db')
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  db.addData(req.body)
  // const id = req.user?.sub
  // db.getUser(id)
  //   .then(user => {
  //     res.json({ user })
  //     return null
  //   })
  //   .catch(err => {
  //     res.status(500).send(err.message)
  //   })
})

module.exports = router
