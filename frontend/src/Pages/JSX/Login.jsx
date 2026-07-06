import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    roll_no: "",
    add: "",
    role: "student",
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formdata);
    setTimeout(()=>{
      if (
      formdata.email === "bharathnk@gmail.com" &&
      formdata.password === "1234"
    ) {
      Navigate("/show-student");
    } else {
      console.log("Invalid credentials");
      setLoading(false);
    }
    }, 5000);
    
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
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="login-button" disabled={loading}>
          {`${loading ? "Logging in..." : "Login"}`}
        </button>
        <p>Welcome to the Login Page</p>
      </form>
      </div>
      <h1></h1>
    </div>
  );
}

export default Login;
