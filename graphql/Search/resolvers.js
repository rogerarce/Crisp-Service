const db = require('../../lib/db.js')
const Product = require('../../models/Product.js')

exports.resolver = {
  Query: {
    search(roots, { name }, context) {
      return db()
        .then(() => Product.find({ 'name': name }))
        .then(products => products)
        .catch(err => console.error(err))
    }
  }
}
