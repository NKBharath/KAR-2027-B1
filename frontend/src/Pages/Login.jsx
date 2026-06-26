import { useState } from "react";
function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

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
    console.log(formdata);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
