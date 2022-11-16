/* ----------------------------- */
/* 5. Create the Movie model     */
/* ----------------------------- */

const { Schema, model } = require("mongoose");

const movieSchema = new Schema (
    {
        title: {
            type: String
        },
        genre: {
            type: String
        },
        plot:  {
            type: String
        },
        cast:  {
            type: [String]
        }
    }
)

const Movie = model("Movie", movieSchema); 
modules.exports = Movie;