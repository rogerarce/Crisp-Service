const db = require('../../lib/db.js')
const Order = require('../../models/Orders.js')

exports.resolver = {
  Query : {
    orders(roots, { id }, context) {
      return db()
        .then(() => Order.find())
        .then(order => order)
        .catch(err => console.error(err))
    }
  },
  Mutation: {
    addOrder(roots, { order }, context) {
      return db()
        .then(() => Order.create(order))
        .then(order => order)
        .catch(err => console.error(err))
    },
    updateOrder(roots, { id, order }, context) {
      return db()
        .then(() => Order.findByIdAndUpdate(id, order, { new: true }))
        .then(order => order)
        .catch(err => console.error(err))
    },
    removeOrder(roots, { id }, context) {
      return db()
        .then(() => Order.findByIdAndRemove(id))
        .then(order => order)
        .catch(err => console.error(err))
    }
  }
}
