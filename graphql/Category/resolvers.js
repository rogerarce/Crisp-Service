let categoryMock = [ { name: 'snack' }, { name: 'dinner' } ]

exports.resolver = {
  Query: {
    categories(roots, { name }, context) {
      let result = name ? categoryMock.filter(c => c.name == name) : categoryMock
      
      if (result.length > 0)
        return result
      else
        throw new Error(`Category ${name} does not exist`)
    }
  },
  Mutation: {
    category(roots, { category }, context) {
      categoryMock.push(category)

      return category
    }
  }
}
