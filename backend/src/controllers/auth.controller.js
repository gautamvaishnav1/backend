const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const foodPartnerModel = require("../models/foodPartner.model");
const { validationResult } = require("express-validator");

//user register
exports.postRegisterUser = async (req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
       return res.status(400).json({
            message:'invalid places ',
            errors:errors.array()[0].msg
        })
    }
    try {
        console.log(req.body)
        const { fullName, email, password } = req.body;


        const isExist = await userModel.findOne({ email })
        if (isExist) {
            return res.status(409).json({
                message: 'user already registered'
            })
        }
        const hashPassword = await bcrypt.hash(password, 13)
        const user = await userModel.create({ fullName, email, password: hashPassword })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.cookie('token', token)

        res.status(201).json({
            message: 'user registered successfully',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'internal server error'
        })
    }
}

exports.postLoginUser = async (req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
      return  res.status(400).json({
            message:"invalid places",
            errors:errors.array()[0].msg
        })
    }
    try {
        const { email, password } = req.body;
        const isExist = await userModel.findOne({ email })
        if (!isExist) {
            return res.status(401).json({
                message: 'invalid email and password'
            }
            )
        }
        const isPasswordMatch = await bcrypt.compare(password, isExist.password)
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: 'invalid email and password'
            })
        }
        const token = jwt.sign({ id: isExist._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.cookie('token', token)
        res.status(200).json({
            message: 'user log in successFully',
            user: {
                fullName: isExist.fullName,
                email: isExist.email,
                id: isExist._id,
            }
        })

    }
    catch (err) {
        res.status(500).json({
            message: 'internal server error'
        })
    }
}

exports.postLogoutUser = (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({
            message: 'user logout successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'internal server error'
        })

    }
}

// foodPartner register
exports.postRegisterFoodPartner = async (req, res) => {

    const errors=validationResult(req)
    if(!errors.isEmpty()){
      return  res.status(400).json({
            message:"invalid places",
            errors:errors.array()[0].msg
        })
    }

    try {
        const { fullName, email, password,phoneNumber,address } = req.body
        const isExist = await foodPartnerModel.findOne({ email })
        if (isExist) {
            return res.status(409).json({
                message: 'user already register'
            })
        }
        const hashPassword = await bcrypt.hash(password, 13)
        const user = await foodPartnerModel.create({ fullName, email, password: hashPassword,phoneNumber,address })

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)
        res.cookie('token', token)

        res.status(201).json({
            message: 'food partner registered successfully',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber:user.phoneNumber,
                address:user.address
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })

    }
}

exports.postLoginFoodPartner = async (req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
       return res.status(400).json({
            message:"invalid places ",
            errors:errors.array()[0].msg
        })
    }
    try {
        const { email, password } = req.body;
        const isExist = await foodPartnerModel.findOne({ email })
        if (!isExist) {
            return res.status(401).json({
                message: 'user not register'
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, isExist.password)
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "invalid user id and password"
            })
        }
        const token = jwt.sign({
            id: isExist._id
        }, process.env.JWT_SECRET)
        res.cookie('token', token)
        res.status(200).json({
            message: "user login successfully",
            user: {
                id: isExist._id,
                fullName: isExist.fullName,
                email: isExist.email,
                phoneNumber:isExist.phoneNumber,
                address:isExist.address
            }
        })
    }
     catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}

exports.postLogoutFoodPartner = (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({
            message: "user logout successfully"
        })


    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}