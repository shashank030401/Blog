import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Socials:{
        type:Array,
    }
});

export default mongoose.model('Admin',adminSchema);