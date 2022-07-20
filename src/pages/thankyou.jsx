import Button from "../common/button";
import NavBar from "../components/navBar";
import SuccessIcon from "../icons/successIcon";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  
const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <NavBar />

      <div className="thank-you-container">
        <div className="thankyou-content-container">
          <div>
            <SuccessIcon size={100} color="#36ad00" />
          </div>
          <div className="thankyou-heading">
            <h1>ORDER PLACED SUCCESSFULLY!</h1>
            <p>
              Your order number is: <span>123456</span>{" "}
            </p>
            <p>
              Please check your <span>e-mail</span> for further information
            </p>
            <p>
              feel free to send us a message at{" "}
              <a href="mailto: info@coffeeshop.com">info@coffeeshop.com</a> if
              you have any inquery
            </p>
          </div>
          <Button className="home-button" onClick={handleClick}>
            Go to home page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
