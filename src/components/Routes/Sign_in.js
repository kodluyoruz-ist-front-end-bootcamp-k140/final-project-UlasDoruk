import "./Sign_in.css"
import image from "./Doors of Moria_2.jpg"
import { register } from "../../Firebase/Firebase"
import { useState } from "react";
import {Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    if (user) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container">
      <img className="moria" src={image}></img>
      <form className="form" onSubmit={handleSubmit}>
        <div class="form-group">
          <h2 className="formtext">
            SPEAK FRIEND AND ENTER{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              fill="grey"
              class="bi bi-door-open-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            </svg>
          </h2>
          <input
            value={email}
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <small id="emailHelp" class="form-text text-muted"></small>
          <br></br>
          <input
            value={password}
            type="password"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            class="btn btn-warning submit"
            disabled={!email || !password}
          >
            Submit
          </button>
        </div>
      </form>

      <Toaster/>
    </div>
  );
}

export default Login