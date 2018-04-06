const db = require('../../lib/db.js')
const Product = require('../../models/Product.js')

exports.resolver = {
  Query: {
    products(roots, { id }, context) {
      return db()
        .then(() => id ? Product.findById(id) : Product.find())
        .then(products => products)
        .catch(error => console.error(error))
    }
  },
  Mutation: {
    product(roots, { product }, context) {
      product.status = 'available'
      db()
        .then(() => Product.create(product))
        .then(product => product)
        .catch(err => console.error(err))
    }
  }
}
