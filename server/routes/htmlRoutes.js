//DECLARATIONS: path ------------------
const path = require('path');

//EXPORT GET ROUTE to send html file==========================
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
};