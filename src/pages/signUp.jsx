import Button from "../../src/common/button";
import TextField from "../common/textField";
import NavBar from "../components/navBar";
function SignUp() {
  function handleClick(e) {}
  return (
    <div>
         <NavBar />
         <div className="sign-in-container">
      <div className="sign-in-content">
        <div className="sign-in-heading">
          <h1>Create Account!</h1>
        </div>
        <form className="form-signin">
          <TextField
            name="name"
            type="text"
            placeholder="Name"
            className="signin-input"
          />
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
          <TextField
            name="password"
            type="password"
            placeholder="Confirm Password"
            className="signin-input"
          />
        </form>
        <Button className="home-button" onClick={handleClick}>
          Sign Up
        </Button>
      </div>
    </div>
    </div>
    
  );
}

export default SignUp;
