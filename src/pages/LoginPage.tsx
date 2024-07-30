import { useLayoutEffect } from "react";
import RadixLoginCard from "../components/RadixLoginCard";
import styles from "./loginPage.module.css";
import LoginLogo from "../components/LoginLogo";

const LoginPage = () => {
  useLayoutEffect(() => {
    document.title = "Log In - RealSatisfied";
  }, []);
  return (
    <div className={styles.loginContainer}>
      <LoginLogo />
      <RadixLoginCard />
    </div>
  );
};

export default LoginPage;
