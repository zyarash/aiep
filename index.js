/**


 * Does a bit of fancy stuff to
 * obfuscate artist information & show the EP release info only after the countdown has been
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
    var end = new Date(Date.UTC(2020, 3, 19, 19, 55, 0));
    var now = new Date().getTime();

    if ((end - now) < 1) {
        response.redirect("https://nsd.presave.io/t/NSDBL103");
    }

    response.render("countdown");
});


app.listen(port, () => {
    console.log(`Listetning on port ${port}`);
});
