const { Schema, model } = require('mongoose')

const client = new Schema({
  idNum: {
      type: String, unique: true
  },
  name: String,
  email: String,
  phone: String
}, {
  timestamps: true,
  versionKey:false
})

module.exports = model('Clients', client)