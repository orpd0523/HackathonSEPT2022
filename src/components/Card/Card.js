import "./Card.scss";

function Card(props) {
  const { children, src, alt } = props;
  return (
    <div className="card">
      {src && (
        <div className="card__top card__top--small">
          <img className="card__image" src={src} alt={alt} />
        </div>
      )}
      {/*If src is passed down in prop(exists) true, then render card__top*/}
      <div className="card__bottom">{children}</div>
    </div>
  );
}

export default Card;
