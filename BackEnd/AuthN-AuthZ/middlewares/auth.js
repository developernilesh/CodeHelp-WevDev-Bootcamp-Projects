const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req,res,next) => {
    try {
        // extract jwt token
        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token);
        console.log("header",req.header("Authorization"));

        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","")

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Token Missing',
            })
        }

        // verify the token
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode);

            req.user = decode;

        } catch (error) {
            return res.status(401).json({
                successs:false,
                message: 'token is invalid'
            })
        }
        next();

    } catch (error) {
        return res.status(401).json({
            successs:false,
            message: 'Something went wrong while verifying the token'
        })
    }
}

exports.isStudent = (req,res,next) => {
    try {
        if(req.user.role !== 'Student'){
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for students'
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try {
        if(req.user.role !== 'Admin'){
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for admin'
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        })
    }
}