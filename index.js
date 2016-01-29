module.exports = function(options){
	var options = options || {},
		code = options.code || 301,
		subdomain = options.subdomain || 'www.';
	return function(req, res, next){
		if (~req.hostname.indexOf(subdomain)) {
			return res.redirect(code, req.protocol + '://' + req.hostname.replace(subdomain, '') + req.path);
	    }
	    return next();
	}
}