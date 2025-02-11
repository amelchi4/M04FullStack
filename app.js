//setup
const express=require("express")
var cors = require('cors')
//activation
const app=express()
app.use(cors())
const router=express.Router()
//starting web server

//making an api using routes
router.get("/songs", function(req,res){
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: "10",
            releaseDate: new Date(2011,9,22),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharell Williams",
            popularity: "10",
            releaseDate: new Date(2013,11,21),
            genre:["soul", "new soul"]
        }
    ];
    res.json(songs)
});

app.use("/api", router)
app.listen(3000)
