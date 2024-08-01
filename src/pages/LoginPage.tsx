import { useLayoutEffect } from "react";
import RadixLoginCard from "../components/RadixLoginCard";
import styles from "./loginPage.module.css";
// import LoginLogo from "../components/LoginLogo";
// import LoginCard from "../components/FormCo";
import LogoC from "../components/LogoC";
// import Header from "../components/Header";

const LoginPage = () => {
  useLayoutEffect(() => {
    document.title = "Log In - RealSatisfied";
  }, []);
  return (
    <div className={styles.loginContainer}>
      <LogoC/>
      <RadixLoginCard />
    </div>
  );
};

export default LoginPage;
