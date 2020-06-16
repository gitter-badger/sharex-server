// Import from Modules
const express       = require("express");
const fileUpload    = require('express-fileupload');
const path          = require("path");
const app           = new express();
const Users         = require("./models/index").Users;
const Files         = require("./models/index").Files;
// ENV
const ENVPORT       = (process.env.PORT || 3000);
const ENVHOST       = (process.env.EXHOST || "0.0.0.0");
const ENVTOKEN      = (process.env.APTOKEN || "mysharexupload123");
const ENVURL        = (process.env.APURL || "http://localhost:3000");

// Allowed Mimetypes 
const allowedmimetypes = ["image/png", "image/jpg", "image/jpeg", "image/gif", "audio/mp4"];



// Middleware
app.use("/img", express.static("./static"));

app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (req.get("token") != ENVTOKEN){
        return res.status(401).end("The Token is not valid!");
    }

    if ((!req.files || Object.keys(req.files).length === 0)) {
        return res.status(400).end('No files were uploaded!');
    }

    let file = req.files.data;
    let filemimetype = req.files.data.mimetype.toString();

    if(!allowedmimetypes.includes(filemimetype)){
        return res.status(400).end("No valid Mimetype!");
    }

    const date      = new Date().getTime();
    const ext       = filemimetype.toString().split("/")[1];
    const filen     = `${date}.${ext}`;
    const filepath  = path.resolve("static/", filen);
    
    
    
    file.mv(filepath)
    .then( __e => {
        return res.status(206).send(`${ENVURL}/img/${filen}`);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send(`Error ${err}`);
    })
});

// Express Listen
app.listen(ENVPORT, ENVHOST, () => {
    console.log(`Server listening on ${ENVHOST}:${ENVPORT}`);
})