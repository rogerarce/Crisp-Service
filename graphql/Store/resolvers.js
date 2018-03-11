let storeMock = [{
  id: 1,
  name: 'Betty\'s Caffe',
  location: {
    address: 'Tacloban City',
    gelocation: {
      lat: '11.254339',
      lng: '124.961687',
    }
  },
  availability: {
    opens_at: '08:30',
    closes_at: '09:00',
    status: 'open'
  },
  rating: 100,
  created_at: '2018-01-02',
  updated_at: '2018-01-02',
}]

exports.resolver = {
  Query: {
    stores(roots, { id }, context) {
      let result = id ? storeMock.filter(s => s.id = id) : storeMock

      if (result.length > 0)
        return result
      else
        throw new Error(`Store with id of ${id} does not exist`)
    }
  },
  Mutation: {
    store(roots, { store }, context) {
      store.created_at = '2018-03-20'
      store.updated_at = '2018-03-20'
      storeMock.push(store)

      return store
    }
  }
}
