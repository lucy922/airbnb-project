import image from "../asset/images/card-image.jpg";
import { FaStar } from "react-icons/fa";

function Card(props) {
  console.log(props.img);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card--body">
      <div className="image--div">
        <img src={props.img} alt="thumbnail" className="card--image" />
        {badgeText && (
          <div className="span">
            <span>{badgeText}</span>
          </div>
        )}
      </div>
      <div className="card--details">
        <FaStar /> <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount})</span> <span>{props.location}</span>
        <p>{props.title}</p>
        <span>
          <b>From ${props.price} /</b> person
        </span>
      </div>
    </div>
  );
}

export default Card;
