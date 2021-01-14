const bouncer={};
bouncer.userIsloggedIn = function(req,res,next)
{
    if(req.session.username)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }
}
module.export = bouncer;