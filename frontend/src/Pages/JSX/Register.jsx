import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [formdata, setFormdata] = useState({
    name: "",
    rollno: "",
    student_number: "",
    email_id: "",
    DOB: "",
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(
        "http://localhost:5001/api/student/addstudent",
        formdata
      )

      console.log(response.data.sucess)
      console.log(response.data.message)
    }catch(error){
      console.log(error.response.data)
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={onSubmit} className="login-form">
          <h1>LOGIN</h1>

          <input
            type="email"
            placeholder="Email"
            required
            name="email_id"
            onChange={handleChange}
          />
          <input
            type="string"
            placeholder="enter your name"
            required
            name="name"
            onChange={handleChange}
          />
          <input
            type="string"
            placeholder="enter your roll no"
            required
            name="rollno"
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="enter your DOB"
            required
            name="DOB"
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="enter your phn number"
            required
            name="student_number"
            onChange={handleChange}
          />
          <button type="submit" className="login-button" >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
