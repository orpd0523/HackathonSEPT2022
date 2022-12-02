import "./Button.scss";

function Button(props) {
  const { children, ...otherProps } = props;
  return (
    <div className="btn__container">
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
}

export default Button;
