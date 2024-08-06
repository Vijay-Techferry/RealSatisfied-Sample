import { lazy, useLayoutEffect } from "react";
const LoginCard = lazy(() => import("../components/RadixLoginCard"));
import styles from "./loginPage.module.css";
const Logo = lazy(() => import("../components/LogoC"));

const LoginPage = () => {
  useLayoutEffect(() => {
    document.title = "Log In - RealSatisfied";
  }, []);
  return (
    <div className={styles.loginContainer}>
      <Logo />
      <LoginCard />
    </div>
  );
};

export default LoginPage;
