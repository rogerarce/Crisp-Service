let ordersMock = [{
  id: 1,
  quantity: 2,
  price: 330,
  order_number: Math.round(Math.random(100, 2000)),
  item: [{
    id: 2,
    name: 'Ensaimada',
    description: 'asd asdas ad asdasdas adas asdasd',
    price: 20,
    rating: 100,
    status: 'available',
    created_at: '2018-01-01',
    updated_at: '2018-01-01',
  }, {
    id: 1,
    name: 'Brazo de mercedes',
    description: 'asd asdas ad asdasdas adas asdasd',
    price: 290,
    rating: 100,
    status: 'available',
    created_at: '2018-01-01',
    updated_at: '2018-01-01',
  }],
  created_at: '2018-03-13',
  updated_at: '2018-03-13',
}, {
  id: 1,
  quantity: 1,
  price: 290,
  order_number: Math.round(Math.random(100, 2000)),
  item: [{
    id: 1,
    name: 'Brazo de mercedes',
    description: 'asd asdas ad asdasdas adas asdasd',
    price: 290,
    rating: 100,
    status: 'available',
    created_at: '2018-01-01',
    updated_at: '2018-01-01',
  }],
  created_at: '2018-03-13',
  updated_at: '2018-03-13',
}]

exports.resolver = {
  Query : {
    orders(roots, { id }, context) {
      let result = id ? ordersMock.filter(o => o.id == id) : ordersMock

      if (result.length > 0) 
        return result
      else
        throw new Error(`Order ${id} does not exist`)
    }
  }
}
