import "./Card.scss";
import audioIcon from '../../assets/icons/Icon-audio.svg';

function Card(props) {
  const { children, src, alt, audio=false } = props;
  return (
    <div className="card">
      {src && (
        <div className="card__top card__top--small">
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
