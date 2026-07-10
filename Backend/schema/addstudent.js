const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50
    },
    rollno:{
        type: String,
        required: true,
        unique: true,
    },
    email_id:{
        type: String,
        required: true,
        unique: true,
    }, student_number:{
        type: Number,
        required: true,
        unique: true
    },
    DOB:{
        type: Date,
        required: true
    }
})

const Student = mongoose.model("Student", studentsSchema);
module.exports = Student;