const debug = require('debug')
const Client = require('../models/clients.model')

const getClients = async (req, reply) => {
  try {
    const clients = await Client.find({})
    reply.send(clients)
  } catch (error) { console.log(error) }
}

const getOneClient = async (req, reply) => {
  try {
    const client = await Client.findOne({
      _id: req.params.id
    })
    reply.send(client)
  } catch (error) { console.log(error) }
}

const addClient = async (req, reply) => {
  try {
    const exist = await Client.findOne({ idNum: req.body.idNum })
    if (exist) {
      return reply.send('usuario existente')
    }
    const client = new Client(req.body)
    client.save()
    reply.send(client)
  } catch (error) { console.log(error) }
}

const editClient = async (req, reply) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    reply.send(client)
  } catch (error) { console.log(error) }
}

const delClient = async (req, reply) => {
  try {
    const client = await Client.findByIdAndDelete({
      _id: req.params.id
    })
    reply.send({ message: 'client deleted' })
  } catch (error) { console.log(error) }
}

const bulkLoad = async (req, reply) => {
  const session = await Client.startSession()
  session.startTransaction()

  try {
    await Client.create([		{
			idNum: "1724306939",
			name: "jhon",
			email: "jhon@gmail.com",
			phone: "09876321"
		}], { session })

    await Client.create([		{
			idNum: "1724306939",
			name: "jhon",
			email: "jhon@gmail.com",
			phone: "09876321"
		}], { session })  

    await session.commitTransaction();
    reply.send({ message: 'saved'})
  } catch (error) { console.log(error) }
  session.endSession()
}

module.exports = {
  getClients,
  getOneClient,
  addClient,
  editClient,
  delClient,
  bulkLoad
}