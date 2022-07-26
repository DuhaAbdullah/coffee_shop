import Button from "../../src/common/button";
import TextField from "../common/textField";
import NavBar from "../components/navBar";
function SignIn() {
  function handleClick(e) {}
  return (
    <div>
       <NavBar />
      <div className="sign-in-container">
        <div className="sign-in-content">
          <div className="sign-in-heading">
            <h1>Sign in!</h1>
          </div>
          <form className="form-signin">
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              className="signin-input"
            />
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="signin-input"
            />
          </form>
          <Button className="home-button" onClick={handleClick}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
