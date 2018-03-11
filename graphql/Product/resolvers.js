const productsMock = [
  {
    id: 1,
    name: 'Brazo de mercedes',
    description: 'asd asdas ad asdasdas adas asdasd',
    price: 290,
    rating: 100,
    status: 'available',
    created_at: '2018-01-01',
    updated_at: '2018-01-01',
  },
  {
    id: 2,
    name: 'Ensaimada',
    description: 'asd asdas ad asdasdas adas asdasd',
    price: 20,
    rating: 100,
    status: 'available',
    created_at: '2018-01-29',
    updated_at: '2018-01-29',
  },
];

exports.resolver = {
  Query: {
    products(roots, { id }, context) {
      let result = id ? productsMock.filter(p => p.id == id) : productsMock 

      if (result.length > 0)
        return result
      else
        throw new Error(`Product with ${id} does not exist`)
    }
  },
  Mutation: {
    product(roots, { product }, context) {
      product.created_at = '2018-03-14'
      product.updated_at = '2018-03-14'
      product.status = 'available'

      productsMock.push(product)

      return product;
    }
  }
}
