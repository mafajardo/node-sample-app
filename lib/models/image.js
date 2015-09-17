var request = require('request');

var Image = module.exports = function(){

}

Image.retrieveById = function(id, callback){
  request.get('http://api.shutterstock.com/images/' + id + '.json', {
    headers: {
      "Content-Type": "application/json"
    },
    auth: {
      username: 'canidate',
      password: '6dcbca94adb26b93e919200467483e458c747bef'
    }
  }, function(err, res){
    var body = res.body;
    return body;
  });
}

Image.getFeaturedImageIds = function(callback){
  return callback(null, [123, 295543, 59549, 88588]);
}