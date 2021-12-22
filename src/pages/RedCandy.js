import { Link } from "react-router-dom";

const RedCandy = () => {
  return (
    <div>
      <h3>Red Candy</h3>
      <div className="w3-btn w3-ripple w3-text-blue"><i><Link to="/">back</Link></i></div>
      <hr />
      <img className="candy" src="https://media.giphy.com/media/JtNVJ9oT1wwP7XNnqH/giphy.gif" alt="8("/>
    </div>
  )
}

export default RedCandy
