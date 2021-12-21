const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String, required: true },
    upVotes: [{ type: Boolean, }],
    downVotes: [{ type: Boolean, }],
    author: { type: Schema.Types.ObjectId, ref: "user", required: true, autopopulate: true }, // tipo id 
    comments: [{ type: Schema.Types.ObjectId, ref: "comment", required: true, autopopulate: true }]

});


IdeaSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("idea", IdeaSchema)