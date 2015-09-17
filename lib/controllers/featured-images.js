var Image = require('../models/image');

exports.get = function(req, res, next){
  Image.retrieveById(123, function(err, image){
    res.render('images/featured', {test: 'hi', images: [image]})
  });
}