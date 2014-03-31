
/*
 * GET users listing.
 */

exports.userlist = function(db){
	return function(req, res){
		db.collection('usercollection').find().toArray(function(err, items){
			res.json(items);
		});
	};
};
