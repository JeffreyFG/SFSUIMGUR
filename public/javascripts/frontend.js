
function logoutClick(event)
{
    var fetchOptions =
    {
     method:'POST',
     body:'',
     headers: 
     {
        'Content-Type': 'application/json'
     }
    }
    let fetchUrl = 'http:localhost:3000/users/logout';
    fetch(fetchUrl,fetchOptions).then(function(data)
    {
        let logButton = document.getElementById("loginandout");
        logButton.innerHTML="Log IN";
        logButton.setAttribute('href','/login')
        logButton.onclick = null;
    }).catch(function(err)
    {
        location.reload();
    });
}


if(document.cookie.includes('cscid'))
{
    let logButton = document.getElementById("loginandout");
    logButton.innerHTML="log out";
    logButton.removeAttribute('href');
    logButton.onclick = logoutClick;
}
else
{
    let logButton = document.getElementById("loginandout");
    logButton.innerHTML="Log In";
    logButton.setAttribute('href','/login')
}