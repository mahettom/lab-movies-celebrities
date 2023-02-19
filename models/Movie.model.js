const { Schema, model } = require("mongoose");
const Celebrity = require("./Celebrity.model");

//  CREATE MODEL FOR CELEBRITRY
const movieSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            require: true,
        },
        genre: {
            type: String,
            default: 'unknown',
        },
        plot: {
            type: String,
            default: "unknown",
        },
        cast: [{
            type: Schema.Types.ObjectId,
            ref: "Celebrity"
        }]
    }
);


const Movie = model('Movie', movieSchema);

module.exports = Movie;