import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrlId: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
    visitHistory: [{ timeStamps: String }],
    createdBy : {type : mongoose.Schema.Types.ObjectId, ref: 'users'}
}, {timestamps : true})

const URL = mongoose.model("url", urlSchema)

export default URL