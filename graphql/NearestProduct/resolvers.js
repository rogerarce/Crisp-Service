/*
 * Dashboard should display featured product
 * and nearest products. Nearest product are subject to
 * change base on the appropriate product that is fit
 * for the current time of the Day
 */
let nearestProducts = [{
  id: 1,
  name: 'Brazo de mercedes',
  description: 'asd asdas ad asdasdas adas asdasd',
  price: 290,
  rating: 100,
  status: 'available',
  created_at: '2018-01-01',
  updated_at: '2018-01-01',
}, {
  id: 2,
  name: 'Ensaimada',
  description: 'asd asdas ad asdasdas adas asdasd',
  price: 20,
  rating: 100,
  status: 'available',
  created_at: '2018-01-29',
  updated_at: '2018-01-29',
}]

/**
 * @Todo return all within 5km range from given geohash
 */
exports.resolver = {
  Query: {
    nearest(roots, { geohash }, context) {
      return nearestProducts
    }
  }
}
