const fastify = require('fastify')({
  logger: true
})
require('./utils/mongoose')

const clientsRoute = require('./routes/clients.routes')

fastify.get("/",(request, reply)=> {
  reply.send({ hello: "world" })     
})

clientsRoute.forEach(route => {
  fastify.route(route)
})

const start = async () => {
  await fastify.listen(3000)
  fastify.log.info(`Server on port ${fastify.server.address().port}`)
}

start()