import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
    userId:{
        type:String,
        required:true,
    },
    userPicturePath: String,
    username : String,
    picturePath:{
        type:Array,
        required:true,
    },
    description:{
        required: false,
        type:String,
    },
    location: {
        type: String,
        required: false,
    },
    likes : {
        type: Map,
        of: Boolean,
    },
    comments : {
        type : Array,
        default : [],
    }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Post', postSchema);