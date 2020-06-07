// Import from Modules
const express       = require("express");
const morgan        = require("morgan");
const bodyParser    = require("body-parser");
const hbs           = require("hbs");

const app = new express();

// ENV
const ENVPORT       = (process.env.PORT || 3000);
const ENVHOST       = (process.env.EXHOST || "0.0.0.0");
const ENVLOGLEVEL   = (process.env.EXLOGL);

// Express Settings
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// Middleware
if(ENVLOGLEVEL){
    app.use(morgan(ENVLOGLEVEL));
}
const jsonParser        = bodyParser.json();
const urlencodedParser  = bodyParser.urlencoded({ extended: false });
app.use('/static', express.static('public'));

// Import Routes
const home = require("./routes/home");

// Define Routes
app.use("/", home);
app.use("/home", home);


// Express Listen
app.listen(ENVPORT, ENVHOST, () => {
    console.log(`Server listening on ${ENVHOST}:${ENVPORT}`);
})