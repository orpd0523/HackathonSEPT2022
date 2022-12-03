import "./Card.scss";
import audioIcon from "../../assests/Icon-audio.svg";
import locationIcon from "../../assests/Icon-location.svg";

function Card(props) {
  const { children, src, alt, audio = false, location = false } = props;
  return (
    <div className="card">
      {src && (
        <div className="card__top card__top--small">
          {location && (
            <div className="card__location">
              <img className="" src={locationIcon} alt="location" />
              <div>
                <p className="typography typography--body2">YOUR ADDRESS:</p>
                <p className="typography typography--body2">234 w 17 ave</p>
              </div>
            </div>
          )}
          <img className="card__image" src={src} alt={alt} />
        </div>
      )}
      {/*If src is passed down in prop(exists) true, then render card__top*/}
      <div className="card__bottom">
        {children}
        {audio && <img className="card__audio" src={audioIcon} alt="audio" />}
      </div>
    </div>
  );
}

export default Card;
