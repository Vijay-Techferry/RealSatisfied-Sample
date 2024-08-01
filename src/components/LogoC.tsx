import { Link } from "react-router-dom";
import styles from "./logoSide.module.css"

export default function LogoC() {
  return (
    <>
      <div
        className={styles.logoTop}>
        <div
          className={styles.logoInner}
          
        >
          <Link
            to="https://www.realsatisfied.com/"
            className={styles.homeLink}
          >
            <img
              src="https://app.realsatisfied.com/version/01.98/images/logo.svg"
              className={styles.logoImg}
            />
          </Link>
        </div>
        <h1
          className={styles.welcomeStyle}
          
        >
          Welcome to
        </h1>
        <h1
          className={styles.welcomeStyle}
        >
          RealSatisfied
        </h1>
        <p
          className={styles.heroText}
         
        >
          {"Designed for Real Estate Professionals"}
        </p>
        <div
          className={styles.heroImg}
        >
          <div
            className={styles.girlContainer}
            
          >
            <img
              className={styles.girlImg}
              src="https://app.realsatisfied.com/version/01.98/images/star-girl.svg"
              
            />
          </div>
          <div
            id="rating-box-col"
            className={styles.ratingBox}
           
          >
            <img
              id="rating-box"
              className={styles.rating}
              src="https://app.realsatisfied.com/version/01.98/images/rating-box.svg"
              
            />
          </div>
        </div>
      </div>
      
    </>
  );
}
