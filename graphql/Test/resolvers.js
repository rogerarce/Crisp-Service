let personMock = [{
  id: 1,
  name: 'Sean',
}, {
  id: 2,
  name: 'Roger',
}, {
  id: 3,
  name: 'Gwapo',
}]

exports.resolver = {
  Query: {
    persons(roots, { id }, context) {
      const result = id ? personMock.filter(p => p.id == id) : personMock

      if (result.length > 0)
        return result
      else
        throw new Error(`Person with ${id} does not exist`)
    }
  },
  Mutation: {
    person(roots, { input }, context) {
      input.id = personMock.length + 1
      personMock.push(input)
      return input
    }
  }
}
