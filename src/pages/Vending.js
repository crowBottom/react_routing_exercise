import { Link, Outlet } from "react-router-dom";
import vending_machine from "../vending.png";
import "../Vending.css";

const Vending = () => {
  return (
    <>
      <div className="vending-container">
        <div className="w3-cell">
          <img src={vending_machine} alt="OOPS" />
        </div>

        <div className="w3-cell w3-cell-middle">
          <div><b>Candy Selection</b></div>

          <div>
            <Link to="/vending/indigo_candy">
            <div className="w3-btn w3-ripple w3-round w3-border w3-light-grey">
              <div className="w3-indigo w3-padding w3-round w3-text-black"></div>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/vending/red_candy">
            <div className="w3-btn w3-ripple w3-round w3-border w3-light-grey">
              <div className="w3-red w3-padding w3-round w3-text-black"></div>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/vending/blue_candy">
            <div className="w3-btn w3-ripple w3-round w3-border w3-light-grey">
              <div className="w3-blue w3-padding w3-round w3-text-black"></div>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/vending/green_candy">
            <div className="w3-btn w3-ripple w3-round w3-border w3-light-grey">
              <div className="w3-green w3-padding w3-round w3-text-black"></div>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/vending/yellow_candy">
            <div className="w3-btn w3-ripple w3-round w3-border w3-light-grey">
              <div className="w3-yellow w3-padding w3-round w3-text-black"></div>
            </div>
            </Link>
          </div>

        </div>
      </div>
        <Outlet />
    </>
  )
};

export default Vending;
