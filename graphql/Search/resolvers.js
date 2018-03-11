const products = []
/*
 *
 */
exports.resolver = {
  Query: {
    search(roots, { name }, context) {
      return []

      let result = products.filter(p => p.name == name)

      if (result.length > 0) 
        return result
      else
        throw new Error(`No product found with your search ${name}`)
    }
  }
}
