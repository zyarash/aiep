/**

 * Akeos Insomnia EP Countdown Server

 * Just a lil server code to spin up the Akeos EP Countdown. Does a bit of fancy stuff to
 * obfuscate artist information & show the EP release info only after the countdown has bee
 * completed.

 **/


const express = require("express")
const path = require("path")


const app = express()
const port = process.env.PORT || "8000";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (request, response) => {
    response.render("countdown");
});


app.listen(port, () => {
    console.log(`Listetning on port ${port}`);
});
