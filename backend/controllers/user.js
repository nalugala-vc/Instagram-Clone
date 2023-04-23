import express from "express";
import User from "../modules/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const {username, email, password } = req.body;

    try {
        let user = await User.findOne({username: username});

        if(user){
            return res.status(403).json({message : `User ${username} already exists`});
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = bcrypt.hashSync(password,salt);

        let newUser = await User.create({ username , email, password:hashedPassword });

        return res.status(200).json({newUser});

    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const signin = async (req, res) => {
    const {username,password} = req.body;

    try {
        let user = await User.findOne({username: username});

        if(!user) {
            return res.status(404).json({message : "User not found"});
        }

        let isMatch = bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(404).json({message:"Password mismatch"});

        const token = jwt.sign({id: user._id},"passwordKey");

        return res.status(200).json({ user: user, token : token});

    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}