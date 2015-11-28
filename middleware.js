module.exports = function(db){

	return {
		requireAuthentication: function(req,res,next){
            console.log('requireAuthentication firing');
			var token = req.get('Auth');

            db.user.findByToken(token)
                .then(function(user){
                    req.user = user;
                    next();
                }, function(){
                   res.status(401).send();
                });
		}
	};
};
