import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";
import CommonButton from "../components/CommonButton";
import Header from "../components/Header";
// import SideBar from "../components/SideBar";

const LandingPage = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(loginActions.logout());
  };
  return (
    <>
      {" "}
      <Header />
      <div>Landing Page</div>
      <CommonButton
        buttonName={"LogOut"}
        imgIcon={""}
        imgAltText={""}
        btnClickHandler={logOutHandler}
      />
    </>
  );
};

export default LandingPage;
