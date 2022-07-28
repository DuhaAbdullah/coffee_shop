import NavBar from "../components/navBar";
import Button from "../common/button";
import { Link, useNavigate } from "react-router-dom";
import GlobeIcon from "../icons/globeIcon";
import TwitterIcon from "../icons/twitterIcon";
import FacebookIcon from "../icons/facebookIcon";
import InstagramIcon from "../icons/instagram.Icon";
import YoutubeIcon from "../icons/youtubeIcon";
import Card from "../common/card";
import popularData from "../popularDrinks.json";

function Home() {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/menu");
  }

  return (
    <div>
      <NavBar />
      <div className="home-cta-container">
        <img
          src="images\home-background.webp"
          className="cta-image"
          alt="background nice"
        />
        <p className="home-p-1">FIND THE COFFEE FOR YOU</p>
        <p className="home-p-2">Doha Coffee at home</p>
        <p className="home-p-3">
          Enjoy the coffee you love, at our place or yours.
        </p>
        <Button className="menu-button" onClick={handleClick}>
          Go to menu page
        </Button>
      </div>
      <div className="home-content">
        <p className="home-p-4"> DOHA® COFFEE. MAKE IT YOURS AT HOME.</p>
        <p className="home-p-5">
          Discover our Doha® coffee made truly yours at home. Enjoy a fresh cup
          of 100%, Arabica coffee or an inspired café classic, whenever and
          however you like it.
        </p>
      </div>
      <div className="home-banner">
        <img
          className="home-banner-image"
          src="images/home-background-2.webp"
          alt="pic"
        />
        <p className="home-p-6">FIND YOUR ROAST</p>
        <p className="home-p-7">Roast</p>
        <p className="home-p-8">Spectrum</p>
        <p className="home-p-9">
          Discover the different coffee and flavour profiles within our Doha
          <sup>®</sup> Roast Spectrum, with 3 roast categories to explore, find
          your perfect coffee.
        </p>
      </div>
      <div className="home-about-us-container">
        <div className="about-us-image">
          <img src="images/about-us-image.webp" alt="background" />
        </div>
        <div className="about-us-content">
          <p className="home-p-10">ABOUT DOHA</p>
          <p className="home-p-11">About us</p>
          <p className="home-p-12">
            Discover what makes Doha® unique, from our commitment to human
            connection and quality coffee, to our welcoming coffeehouses and
            delicious coffees you can enjoy at home.
          </p>
        </div>
      </div>
      <div className="roast-content-container">
        <div className="roast-content">
          <p className="home-p-10 light">CRAFT</p>
          <p className="home-p-11 light">
            The roast <br /> Spectrum
          </p>

          <p className="home-p-12 light">
            Which roast profile do you prefer? Doha® Blonde Roast, Medium Roast
            or Dark Roast? These three make up the Doha® roast spectrum.
          </p>
        </div>
        <div className="roast-image-container">
          <img
            className="roast-image"
            src="images/home-background-3.webp"
            alt="background"
          />
        </div>
      </div>
      <div className="cards-container">
        {popularData.items.map((item) => (
          <Card key={item.id}>
            <Link to={`/menu/${popularData.id}/${item.id}`} state={item} className="popular-drink-link">
              <img src={item.image} className="popular-drink-img"/>
              <p className="popular-drink-name">{item.name}</p>
              <p className="popular-drink-description">{item.description}</p>
            </Link>
          </Card>
        ))}
      </div> 
      <div className="footer-container">
        <div className="footer-logo-container">
          <a href="/" className="home-logo-text">
            Doha Coffee
          </a>
          <p className="home-p-13 light">DOHA COFFEE AT HOME</p>
        </div>
        <div className="home-links-container">
          <Link className="home-p-14 light" to="/">
            <p>About us</p>
          </Link>
          <Link className="home-p-14 light" to="/">
            <p>Contact us</p>
          </Link>
          <div className="home-location-container">
            <GlobeIcon className="globe-svg" />
            <Link className="home-p-14 light" to="/">
              <p>English</p>
            </Link>
          </div>
        </div>
        <div className="footer-legal-links">
          <Link className="home-p-15" to="/">
            <p>Cookies</p>
          </Link>
          <Link className="home-p-15" to="/">
            <p>Privacy Policy</p>
          </Link>
          <Link className="home-p-15" to="/">
            <p>Terms of use</p>
          </Link>
        </div>
        <div className="social-accounts-container">
          <TwitterIcon className="social-account" />
          <FacebookIcon className="social-account" />
          <InstagramIcon className="social-account" />
          <YoutubeIcon className="social-account" />
        </div>
        <div>
          <p className="home-p-16">
            Nestlé uses Doha trademarks under license. Pike Place is a
            registered trademark of The Pike Place Market PDA, used under
            license. Nespresso® and NESCAFÉ® Dolce Gusto® are registered
            trademarks of Société de Produits Nestlé S.A.. All other trademarks
            are the property of their owners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
