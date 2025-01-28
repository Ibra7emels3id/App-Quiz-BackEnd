const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    identification: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 15
    },
    password: {
        type: String,
        required: true
    },
    AcademicYear:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    date:{
        type: Date,
        default: new Date().toDateString().split('T')[0],
    },
    time: {
        type: String,
        default: new Date().toLocaleTimeString()
    },
    updatedAt:{
        type: Date,
        default: new Date()
    },
    lastLogin:{
        type: Date,
        default: new Date()
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;