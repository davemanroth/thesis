
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome!' });
};

exports.test1 = function(req, res){
  res.render('test1', { title: 'This is the first test' });
};


/*
*/
