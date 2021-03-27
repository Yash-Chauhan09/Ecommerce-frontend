import "./App.css";
import cart from "./assets/cart.svg";
import menu from "./assets/menu.svg";
import tick from "./assets/tick.svg";
import item_image from "./assets/itemimage.png";
import review from "./assets/review.png";
import PriceBox from "./PriceBox";
import { useState } from "react";

function App() {
  const tickDisplay = "hidden";
  const tickDisplay2 = "hidden";
  const [display, setDisplay] = useState(tickDisplay);
  const [display2, setDisplay2] = useState(tickDisplay2);
  const handleClick = () => {
    if (display === tickDisplay) {
      setDisplay("visible");
    } else {
      setDisplay(tickDisplay);
    }
  };
  const handleClick2 = () => {
    if (display2 === tickDisplay2) {
      setDisplay2("visible");
    } else {
      setDisplay2(tickDisplay2);
    }
  };
  const [number, setNumber] = useState(0);
  const handleCart = () => {
    if (display === "visible" || display2 === "visible") {
      setNumber(number + 1);
    }else{
      alert('Please select a option befor adding to cart');
    }
  };
  return (
    <div className="app">
      {/* Navbar part starts */}

      <div className="app__header">
        <div className="app__headerLeft">
          <img src={menu} alt="menu" />
        </div>
        <div className="app__headerRight">
          <img src={cart} alt="cart" /> <span>{number}</span>
        </div>
      </div>

      {/* Navbar part ends */}

      {/* Hero part starts */}

      <div className="app__hero">
        <div className="app__hero-image">
          <img src={item_image} alt="Itemimage" className="app_heroImage" />
        </div>
        <div className="app__hero-desc">
          <h2 className="app__heroHeading">Everyday rinse and reload</h2>
          <p className="app__heroPara">
            Achieve your dream skin goal with this complete package of skincare
            produts that will rejuvenate your day.
          </p>
          <div className="app__hero-review">
            <img src={review} alt="review" />
          </div>
        </div>
        <div className="app__hero-price">
          <h4 className="app__heroDiscountprice">₹899</h4>
          <h4 className="app__heroMainprice">₹1299</h4>
        </div>
        <div className="app__hero-priceBoxes">
          <div className="app__hero-priceBox" onClick={handleClick}>
            <PriceBox
              title="1 Months Pack (4 tubes)"
              saving="Savings: ₹200"
              savingPercent="38% Saved"
              mainPrice="₹795"
              discountPrice="₹595"
              type="Most Popular"
              result="Best Results"
            />
            <div className="app__hero-tickBox">
              <img
                style={{ visibility: display }}
                src={tick}
                alt="select sign"
              />
            </div>
          </div>
          <div className="app__hero-priceBox" onClick={handleClick2}>
            <PriceBox
              title="3 Months Pack (12 tubes)"
              saving="Savings: ₹100"
              savingPercent="12% Saved"
              mainPrice="₹999"
              discountPrice="₹899"
              type="basic"
            />
            <div className="app__hero-tickBox">
              <img
                style={{ visibility: display2 }}
                src={tick}
                alt="select sign"
              />
            </div>
          </div>
        </div>
        <div className="app__hero-btn">
          <button className="app__heroBtn" onClick={handleCart}>
            <span>
              <img className="app__heroBtnImg" alt="cartimage" src={cart} />
            </span>{" "}
            Add to cart
          </button>
        </div>
      </div>

      {/* Hero part ends*/}
    </div>
  );
}

export default App;
