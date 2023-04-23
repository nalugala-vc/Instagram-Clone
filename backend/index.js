import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';

/*CONFIGURATION*/
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// parse application/json
app.use(bodyParser.json());
app.use(express.json())

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/assets");
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage});

/*ROUTES */
app.use(express.json());
app.use('/user', userRoutes);

/*DATABASE CONNECTION*/
mongoose.connect('mongodb+srv://vanessachebukwa:LcYobFsc3j0h2iU5@cluster0.emj8zgg.mongodb.net/?retryWrites=true&w=majority').then(()=> app.listen(PORT)).then(()=>console.log(`Connected to database and listening on port ${PORT}`));
