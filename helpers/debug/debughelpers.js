const colors = require('colors');

colors.setTheme({
    error:['black','bgred'],
    succeed:['black','bgreen']
});
const printers = {
    errorPrint:function(message)
    {
        console.log(colors.error(message));

    },
    successPrint:function(message)
    {
        console.log(colors.succeed(message));
    }
}
module.exports = printers;