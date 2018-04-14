const db = require('../../lib/db.js')
const Store = require('../../models/Store.js')

exports.resolver = {
  Query: {
    stores(roots, { id }, context) {
      return db()
        .then(() => Store.find())
        .then(stores => stores)
        .catch(err => console.error(err))
    }
  },
  Mutation: {
    addStore(roots, { store }, context) {
      return db()
        .then(() => Store.create(store))
        .then(store => store)
        .catch(err => console.error(err))
    },
    updateStore(roots, { id, store }, context) {
      return db()
        .then(() => Store.findByIdAndUpdate(id, store, { new: true }))
        .then(store => store)
        .catch(err => console.error(err))
    },
    removeStore(roots, { id }, context) {
      return db()
        .then(() => Store.findByIdAndRemove(id))
        .then(store => store)
        .catch(err => console.error(err))
    }
  }
}
