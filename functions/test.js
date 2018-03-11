/*
 *
 */

module.exports.test = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ 
      message: 'Testing'
    }),
  };

  callback(null, response)
}
