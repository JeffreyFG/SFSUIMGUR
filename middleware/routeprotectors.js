routeProtectors = {};
routeProtectors.userIsloggedIn = function(req,res,next)
{
    console.log(req.session);
    if(req.session.userName)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }
}
module.exports = routeProtectors;