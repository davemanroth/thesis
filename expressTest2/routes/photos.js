exports.photos = function(req, res){
	console.log(req.files);
	res.json(req.files);
});
