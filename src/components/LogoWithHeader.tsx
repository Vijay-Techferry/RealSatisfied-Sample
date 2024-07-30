import styles from "./logoHeader.module.css";
const LogoWithHeader = () => {
  return (
    <div className={styles["style-0"]}>
      <a
        href="https://stage-www.realsatisfied.com"
        className={styles["style-1"]}
      >
        <img
          src="https://stage-v2.realsatisfied.com/version/01.98/images/logo.svg"
          alt=""
          className={styles["style-2"]}
        />{" "}
        <p></p>
      </a>
    </div>
  );
};

export default LogoWithHeader;
