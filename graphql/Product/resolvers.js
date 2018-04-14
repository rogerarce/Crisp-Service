const db = require('../../lib/db.js')
const Product = require('../../models/Product.js')

exports.resolver = {
  Query: {
    products(roots, { id }, context) {
      return db()
        .then(() => Product.find())
        .then(products => products)
        .catch(error => console.error(error))
    }
  },
  Mutation: {
    product(roots, { product }, context) {
      product.status = 'available'
      return db()
        .then(() => Product.create(product))
        .then(product => product)
        .catch(err => console.error(err))
    },
    updateProduct(roots, { id, product }, context) {
      return db()
        .then(() => Product.findByIdAndUpdate(id, product, { new: true }))
        .then(product => product)
        .catch(err => console.error(err))
    },
    removeProduct(roots, { id }, context) {
      return db()
        .then(() => Product.findByIdAndRemove(id))
        .then(product => product)
        .catch(err => console.error(err))
    }
  }
}
