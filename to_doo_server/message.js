import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

export default mongoose.model('message', MessageSchema);