const User = require("../models/User");
const bcrypt = require("bcryptjs");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


// Add User Controller function to handle user registration
const AddUserController = async (req, res, next) => {
    const { email, password, identification } = req.body;

    // check Email 
    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    // check length 
    if (identification.length < 10) {
        return res.status(400).json({ message: 'Identification must be at least 10 characters long!' });
    }

    try {
        // Perform your database operations here
        const user = await User.findOne({ email })
        const id = await User.findOne({ identification })

        if (user) {
            return res.status(400).json({ message: 'Email already exists!' });
        }

        // check identification 
        if (id) {
            return res.status(400).json({ message: 'Identification is required!' });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10)

        // Save the user to the database
        const newUser = new User(req.body);
        newUser.password = hashPassword;
        await newUser.save();

        // Send email verification link here if needed
        res.status(200).json({ message: 'User added successfully!' });
    } catch (error) {
        next(error);
    }
};

// Login user with id and password
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password!' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set cookie
        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
            sameSite: 'Strict',
        });

        // Send response after setting cookie
        res.status(200).json({ message: 'User logged in successfully!', token, role: user.role });
        // Send email verification link here if needed
        next();
    } catch (error) {
        next(error);
    }
};

// get user token
const getUser = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        };

        // verify token and decode it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Token is not valid' });
        }

        // check if user exists
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Token is not valid' });
        }

        // send user data to the client
        res.json({
            role: user.role,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                AcademicYear: user.AcademicYear,
                address: user.address,
                date: user.date,
                status: user.status,
                image: user.image,
                city: user.city,
                country: user.country,
                zip: user.zip,
                lastLogin: user.lastLogin,
                createdAt: user.createdAt,
            },
            token: token
        });

        // verify if user is admin
        next();
    } catch (error) {
        next(error);
    }
};

// Get All Users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json({
            users: users.map(user => ({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                date: user.date,
                image: user.image,
                time: user.time,
                AcademicYear: user.AcademicYear,
                identification: user.identification,
                lastLogin: user.lastLogin,
                createdAt: user.createdAt,
            })),
            message: 'All users fetched successfully!',
        });
    } catch (error) {
        next(error);
    }
};

// Delete User
const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json({ message: 'User deleted successfully' })
        next();
    } catch (error) {
        next(error);
    }
}

// Get Data one User
const getDataUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                date: user.date,
                image: user.image,
                time: user.time,
                AcademicYear: user.AcademicYear,
                identification: user.identification,
                lastLogin: user.lastLogin,
                createdAt: user.createdAt,
            },
            message: 'User fetched successfully!',
        });
    } catch (error) {
        next(error);
    }
}

// Edit User 
const editUser = async (req, res, next) => {
    try {
        const id = req.params.id

        const userId = await User.findById(id)
        if (!userId) {
            return res.status(404).json({ message: 'User not found' })
        }
        const hashPassword = await bcrypt.hash(req.body.password , 10)
        const data = {
            ...req.body,
            password: hashPassword,
            updatedAt: new Date(),
            lastLogin: new Date(),
        }
        const user = await User.findByIdAndUpdate(id, data , { new: true })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json({ message: 'Edit user successfully', user: user })
        next();
    } catch (error) {
        next(error);
    }
};





module.exports = {
    AddUserController,
    getAllUsers,
    loginUser,
    getUser,
    deleteUser,
    getDataUser,
    editUser,
}