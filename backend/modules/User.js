import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required : true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    name:{
        type: String,
        required: false,
    },
    pronouns:{
        type: String,
        required: false,
    },
    bio:{
        type:Array,
        required: false,
    },
    linkToWebsite: {
        type: String,
        required: false,
    },
    private : false,
    gender:{
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false,
    },
    followers:{
        type: Number,
        default: 0,
    },
    following:{
        type: Number,
        default: 0,
    }
});

export default mongoose.model('User', userSchema);