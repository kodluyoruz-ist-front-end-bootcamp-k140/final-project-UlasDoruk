import "./Login.css"
import image from "./Doors of Moria_2.jpg"

function Login() {
  return (
    <div className="container">
      <img className="moria" src={image}></img>
      <form className="form">
        <div class="form-group">
          <h2 className="formtext">
            SPEAK FRIEND AND ENTER{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              fill="grey"
              class="bi bi-door-closed-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </h2>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="E-mail"
          ></input>
          <small id="emailHelp" class="form-text text-muted"></small>
          <br></br>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
          <button type="submit" class="btn btn-warning submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login