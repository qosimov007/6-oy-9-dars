import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleRegistration = () => {
    // Validate username
    if (username === "") {
      alert("Ism kiritilishi zarur");
      document.getElementById("name").focus();
      return;
    } else if (username.length < 3) {
      alert("Ism kamida 3 ta belgidan iborat bo'lishi kerak");
      document.getElementById("name").focus();
      return;
    }

    // Validate password
    if (password === "" || !/\d/.test(password)) {
      alert("Password raqam bilan yozilishi kerak");
      document.getElementById("password").focus();
      return;
    } else if (password.length < 3) {
      alert("Password kamida 3 ta belgidan iborat bo'lishi kerak");
      document.getElementById("password").focus();
      return;
    }

    // Validate repassword
    if (repassword !== password) {
      alert("Repassword Password bilan bir xil bo'lishi kerak");
      document.getElementById("repassword").focus();
      return;
    }

    // Save data to local storage
    const userData = { username, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Ro'yxatdan o'tish</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter username ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repassword" className="form-label">
            Repassword
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            placeholder="Enter password again..."
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3 mb-4"
          onClick={handleRegistration}
        >
          Saqlash
        </button>
      </div>
    </>
  );
}

export default App;
