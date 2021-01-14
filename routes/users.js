const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const errorPrint = require('../helpers/debug/debughelpers').errorPrint;
const successPrint = require('../helpers/debug/debughelpers').successPrint;
const UserError = require('../helpers/errors/UserError');
const db = require('../conf/database');

router.get('/getAllUsers',function(req,res,next)
{
    db.query('SELECT * from users;',function(err,results,fields){
        if(err)
        {
            next(err);
        }
        console.log(results);
        res.send(results);
    });
    
});
router.post('/createUser',function(req,res,next)
{
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassowrd = req.body.confirm_password;
   db.execute('SELECT * FROM users WHERE username=?',[userName]).then(function([results,fields])
        {
            if(results && results.length==0)
            {
                
                return db.execute('SELECT * FROM users WHERE email=?',[email]);
                
            }
            else
            {
                throw new UserError("Error User Already exists",'/register',200);
            }   
        }
    )
    .then(function([results,fields])
        {
            if(results && results.length==0)
            {
               return bcrypt.hash(password,10); 
            
            }
            else
            {
                throw new UserError("Error Email Already exists",'/register',200);
            }   

        }
        
    ).then(function(hashedPassword)
    {
        let baseSQL = 'INSERT INTO users (username,email,password,created) VALUES (?,?,?,now())';  
        return db.execute(baseSQL,[userName,email,hashedPassword]);
    }
    ).then(function([results,fields])
        {
            if(results && results.affectedRows)
            {
               res.redirect('/users/registeredcomplete');
            }
            else
            {
                throw new UserError('serer error, user could not be created','/register',500);
            }
        }
    ).catch(function(err)
    {
        if(err instanceof UserError)
        {
            res.status(err.getStatus());
            res.redirect(err.getRedirectURL);
        }
        next(err)
    });
});
  router.get('/registeredcomplete',function(req,res,next)
  {
      res.sendFile('registreted.html',{root:'public/html'});
  }
  );
router.post('/login',function(req,res,next)
{
    let userName= req.body.userName;
    let password= req.body.password;
    let userID; 
    db.execute("SELECT id,password FROM users WHERE username=?",[userName])
    .then(function([results,fields])
    {
            if(results && results.length ==1)
            {
                
               let hpassword = results[0].password;
               userID=results[0].id;
               return bcrypt.compare(password,hpassword);
            }
            else
            {
                throw new UserError('User name or password are not vaild','/login',200);
            }
    }).then(function(pm)
    {

        if(pm)
        {
        req.session.userName = userName;
        req.session.userID = userID;

        res.redirect('/');
        }
        else
        {
            throw new UserError("User name or password is wrong",'/login',200);
        }
        
    })
    .catch(function(err)
    {
        if(err instanceof UserError)
        {
            res.status(err.getStatus());
            res.redirect(err.getRedirectURL());
        }
        else
        {
            next(err);
        }
    })
});
router.post('/logout',function(req,res,next)
{
    req.session.destroy(function(err)
    {
        if(err)
        {
            next(err);
        }
        else
        {
            res.clearCookie('csid');
            res.redirect('/login');
        }
    })
});




module.exports = router;