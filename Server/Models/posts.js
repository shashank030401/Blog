import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    Date:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    postTitle:{
        type:String,
        required:true
    },
    postContent:{
        type: String,
        required: true
    },
    photoURL:{
        type:String,
    },
    tags:{
        type:Array,
        required:true
    }
});

export default mongoose.model('Posts',postSchema);