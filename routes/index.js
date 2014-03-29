
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.test1 = function(req, res){
  res.render('test1', { title: 'This is the first test' });
};

exports.userlist = function(db){
	return function(req, res){
		db.collection('userlist').find().toArray(function(err, items){
			res.json(items);
		});
	};
};
/*
*/
