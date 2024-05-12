const bcrypt = require("bcrypt");
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.signup = async(req,res) => {
    try {
      // get data
        const {name,email,password,role} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists',
            })
        }

        // secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10)
        } 
        catch (error) {
            return res.status(500).json({
                success:false,
                message:'Error hashing password'
            })
        }

        // create database entry for user
        const user = await User.create({
            name,email,password:hashedPassword,role
        })  

        return res.status(200).json({
            success:true,
            message:'User created successfully',
            data:user,
        })
    } 
    catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:'User cannot be registered,  please try again later',
        })
    }
} 


exports.login = async(req,res) => {
    try {
        // validation for email and password
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details'
            })
        }

        // check for registered user
        let user = await User.findOne({email})

        if(!user){
            res.status(401).json({
                success:false,
                message:'User is not registered'
            })
        }

        // verify password and generate a JWT token
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        if(await bcrypt.compare(password, user.password)){
            // password matches
            let token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:'2h',
                }
            )

            console.log(typeof(user));
            
            user = user.toObject();
            console.log(typeof(user));

            user.token = token;
            user.password = undefined;
            console.log(user);
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'User logged in successfully'
            })
            // res.status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:'User logged in successfully'
            // })
        }
        else{
            // password do not match
            return res.status(403).json({
                success:false,
                message:'Password incorrect'
            })
        }
    } 
    catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:'Login failure'
        })
    }
}