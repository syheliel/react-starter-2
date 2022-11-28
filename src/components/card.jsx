import "./card.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
let Card = (item) => {
  return (
    <div className="card row" key={item.title}>
      <div className="column__left">
        <img src={item.imageUrl} className="card__img"></img>
      </div>
      <div className="column__right">
        <div>
			<FontAwesomeIcon icon={faLocationDot} className="card__icon"></FontAwesomeIcon>
          <span className="card__loc">{item.location}</span>
          <a href={item.googleMapsUrl} className="card__gmap">View on Google Maps</a>
        </div>
        <h1 className="card__title">{item.title}</h1>
        <h2 className="card__date">
          {item.startDate} - {item.endDate}
        </h2>
        <p className="card__desc">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
