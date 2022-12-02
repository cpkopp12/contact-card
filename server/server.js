//DECLARATIONS: express --------------------
const express = require('express');

//app SET UP -------------------------------
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/'));
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());

require('./routes/htmlRoutes.js')(app);

//listen --------------------------------
app.listen(PORT, function() {
    console.log(`Now Listening on port: ${PORT}`);
});