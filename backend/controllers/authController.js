const User = require("../models/User");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");

const generateToken = (userID) => {
    return jwt.sign({ id: userID }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public

const registerUser = async (req, res) => {
    try{
        const { name, email, password, profileImageUrl } = req.body;
    }
};

// @desc Login user
// @route POST /api/auth/login
// @access Public

const loginUser = async (req, res) => {
};

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private

const getUserProfile = async (req, res) => {
};

module.exports = { registerUser, loginUser, getUserProfile };