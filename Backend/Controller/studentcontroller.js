const addstudentschema = require("../schema/addstudent");

const addStudent = async(req, res) => {
    try{
        const { name, rollno, email_id, student_number, DOB } = req.body;
        const student = new addstudentschema({
            name,
            rollno,
            email_id,
            student_number,
            DOB
        });
        await student.save();
        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: student
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to add student",
            error: error.message,
        })
    }
}

module.exports = {addStudent};