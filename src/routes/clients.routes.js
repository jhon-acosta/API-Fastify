const controller = require('../controllers/client.controller')

const route = [
  {
    url: '/clients',
    method: 'GET',
    handler: controller.getClients
  },
  {
    url: '/clients/:id',
    method: 'GET',
    handler: controller.getOneClient
  },
  {
    url: '/clients',
    method: 'POST',
    handler: controller.addClient
  },
  {
    url: '/clients/:id',
    method: 'PUT',
    handler: controller.editClient
  },
  {
    url: '/clients/:id',
    method: 'DELETE',
    handler: controller.delClient
  },
  {
    url: '/clients/bulk-load',
    method: 'POST',
    handler: controller.bulkLoad
  }
]

module.exports = route