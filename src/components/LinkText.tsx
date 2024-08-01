import "./loginCard.css";

const LinkText = ({
  btnClickHandler,
  btnName,
}: {
  btnClickHandler: () => void;
  btnName: string;
}) => (
  <span className="sign-up" onClick={btnClickHandler}>
    {btnName}
  </span>
);

export default LinkText;
