// Imports 
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;



// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/song", express.static(__dirname + "/public/song_list"));



// Set Views
// Set Templating Engine
app.use(expressLayouts);
//app.set("views", "./views");
app.set("layout", "./layouts/default-layout");
app.set("view engine", "ejs");



// Array of objects for each page
// To create dynamic EJS views, layouts
const djData = [
    { name: "Alan Walker", times: ["8pm", "11pm", "12am"]},
    { name: "Tiesto", times: ["12am", "1am", "2am"]},
    { name: "Marshmellow", times: ["9pm", "10pm", "12am"]}
];

const alan_songs = [
    { name: "Alone", src: "../song_list/music/Alan Walker - Alone.mp3" },
    { name: "Darkside", src: "../song_list/music/Alan Walker - Darkside (Lyrics) ft. AuRa and Tomine Harket.mp3" },
    { name: "Different World", src: "../song_list/music/Alan Walker - Different World (Lyrics) ft. Sofia Carson, K-391, CORSAK.mp3"},
    { name: "Faded", src: "../song_list/music/Alan Walker - Faded.mp3"},
    { name: "Sing Me To Sleep", src: "../song_list/music/Alan Walker - Sing Me To Sleep (Lyrics).mp3"},
    { name: "The Spectre", src: "../song_list/music/Alan Walker - The Spectre (Lyrics).mp3"},
    { name: "Sorry", src: "../song_list/music/Alan Walker & ISÁK - Sorry (Lyrics).mp3"},
    { name: "Ignite", src: "../song_list/music/Alan Walker & K-391 - Ignite (Lyrics) ft. Julie Bergan & Seungri.mp3"},
    { name: "On My Way", src: "../song_list/music/Alan Walker, Sabrina Carpenter & Farruko - On My Way (Lyrics).mp3"},
    { name: "Headlights", src: "../song_list/music/Alok, Alan Walker - Headlights (Lyrics) ft. KIDDO.mp3"},
];

const marsh_songs = [
    { name: "Fly", src: "../song_list/music/Marshmello - FLY (Official Music Video).mp3" },
    { name: "Stars", src: "../song_list/music/Marshmello - Stars (Official Music Video).mp3" },
    { name: "Summer", src: "../song_list/music/Marshmello - Summer (Official Music Video) with Lele Pons.mp3"},
    { name: "Here With Me", src: "../song_list/music/Marshmello - Here With Me Feat. CHVRCHES [Alternative Music Video].mp3"},
    { name: "Take It Back", src: "../song_list/music/Marshmello - Take It Back (Official Music Video).mp3"},
    { name: "Silence", src: "../song_list/music/Marshmello ft. Khalid - Silence (Official Lyric Video).mp3"},
    { name: "One Thing Right", src: "../song_list/music/Marshmello, Kane Brown - One Thing Right (Audio).mp3"},
    { name: "Friends", src: "../song_list/music/Marshmello & Anne-Marie - FRIENDS (Lyric Video) OFFICIAL FRIENDZONE ANTHEM.mp3"},
    { name: "Happier", src: "../song_list/music/Marshmello ft. Bastille - Happier (Official Music Video).mp3"},
    { name: "Wolves", src: "../song_list/music/Selena Gomez, Marshmello - Wolves (Lyrics).mp3"}
];

const tiesto_songs = [
    { name: "All Nighter", src: "../song_list/music/Tiësto - All Nighter [Official Visualizer].mp3" },
    { name: "The Motto", src: "../song_list/music/Tiësto & Ava Max - The Motto (Official Music Video).mp3" },
    { name: "10_35", src: "../song_list/music/Tiësto - 10_35 (feat. Tate McRae) (Official Music Video).mp3"},
    { name: "The Business", src: "../song_list/music/Tiësto - The Business (Official Music Video).mp3"},
    { name: "Chills", src: "../song_list/music/Tiësto - Chills (LA Hills) (feat. A Boogie Wit da Hoodie) [Official Audio].mp3"},
    { name: "Hot In It", src: "../song_list/music/Tiësto & Charli XCX - Hot In It [Official Music Video].mp3"},
    { name: "Pump It Louder", src: "../song_list/music/Tiësto & Black Eyed Peas - Pump It Louder (Official Video).mp3"},
    { name: "Learn 2 Love", src: "../song_list/music/Tiësto - Learn 2 Love [Official Audio].mp3"},
    { name: "Bet My Dollar", src: "../song_list/music/Bet My Dollar (feat. Freya Ridings) [Official Audio].mp3"},
    { name: "Lay Low", src: "../song_list/music/Tiësto - Lay Low (Official Music Video).mp3"},
]



// Routes
app.get("", (req, res) => {
    res.render("index");
});

app.get("/screen", (req, res) => {
    res.render("screen", {djData});   
});

app.get("/alanwalker", (req, res) => {
    res.render("alanwalker", {alan_songs});
});

app.get("/marshmellow", (req, res) => {
    res.render("marshmellow", {marsh_songs});
});

app.get("/tiesto", (req, res) => {
    res.render("tiesto", {tiesto_songs});
});




// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));

