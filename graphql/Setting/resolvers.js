const db = require('../../lib/db.js')
const Setting = require('../../models/Setting.js')

exports.resolver = {
  Query: {
    getSettings(root, { id }, context) {
      return db()
        .then(() => Setting.findById(id))
        .then(setting => setting)
        .catch(err => console.error(err))
    }
  },
  Mutation: {
    setSetting(roots, { setting }, context) {
      return db()
        .then(() => Setting.create(setting))
        .then(setting => setting)
        .catch(err => console.error(err))
    },
    updateSetting(roots, { id, setting }, context) {
      return db()
        .then(() => Setting.findByIdAndUpdate(id, setting, { new: true}))
        .then(setting => setting)
        .catch(err => console.error(err))
    },
  }
}
