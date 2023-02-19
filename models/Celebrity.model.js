const { Schema, model } = require("mongoose");

//  CREATE MODEL FOR CELEBRITRY
const celebritySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            require: true,
        },
        occupation: {
            type: String,
            default: 'unknown',
        },
        catchPhrase: {
            type: String,
            default: "Can't touch it !"
        }
    }
);

const Celebrity = model('Celebrity', celebritySchema);

module.exports = Celebrity;