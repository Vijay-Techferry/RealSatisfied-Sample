/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@radix-ui/themes";
import "./loginCard.css";
import InputComp, { InputCompProp } from "./InputComp";
import { useState } from "react";
import _ from "lodash";
import CommonButton from "./CommonButton";
import LinkText from "./LinkText";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

const RadixLoginCard = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch =  useDispatch();

  const emailChangeHandler = (e: any) => setEmailValue(e.target.value);
  const passwordChangeHandler = (e: any) => setPassword(e.target.value);

  const togglePasswordHandler = ()=> setShowPassword((showPassword:boolean)=>!showPassword)

  const listOfInputs:InputCompProp[] = [
    {
      fieldName: "Email Address",
      inputType: "email",
      inputValue: emailValue,
      onChangeHandler: emailChangeHandler,
    },
    {
      fieldName: "Password",
      inputType: showPassword?"text":"password",
      inputValue: password,
      onChangeHandler: passwordChangeHandler,
      inputImgData:{
        src: showPassword?"https://stage-v2.realsatisfied.com/images/eye-slashed.svg":"https://stage-v2.realsatisfied.com/version/01.98/images/eye.svg",
        inputImgAltText: "eye",
        fromRight:"10px",
        imgClickHandler:togglePasswordHandler
      }
    },
  ];

  const listOfSSOBtns = [
    {
      buttonName: "Log in with Facebook",
      imgIcon:
        "https://stage-v2.realsatisfied.com/version/01.98/images/new_r2/icon-fb.svg",
      imgAltText: "",
      btnClickHandler: () => alert("Facebook"),
    },
    {
      buttonName: "Log in with Google",
      imgIcon:
        "https://app.realsatisfied.com/version/01.98/images/new_r2/icon-google.svg",
      imgAltText: "",
      btnClickHandler: () => alert("Google"),
    },
  ];

  return (
    <Card className="form-signin">
      <div className="innerCard">
        <h2 className="login-text">Log In</h2>
        <div>
          <span className="needAccount">Need a RealSatisfied account? </span>
          <LinkText btnClickHandler={() => alert("Yet")} btnName="Sign Up" />
        </div>
        {_.map(listOfInputs, (inp: any) => (
          <InputComp
            key={inp?.fieldName}
            fieldName={inp?.fieldName}
            inputType={inp?.inputType}
            inputValue={inp?.inputValue}
            onChangeHandler={inp?.onChangeHandler}
            inputImgData={inp?.inputImgData}
            
          />
        ))}
        <div className="forgotPasswordSection">
          <span>
            <input type={"checkbox"} />{" "}
            <span style={{ marginLeft: "5px" }}>Keep me logged In</span>
          </span>
          <LinkText
            btnClickHandler={() => alert("Yet")}
            btnName="Forgot password?"
          />
        </div>
        <div>
          <CommonButton
            buttonName={"Log In"}
            imgIcon={""}
            imgAltText={""}
            btnClickHandler={function (): void {
              if (emailValue && password) {
                dispatch(loginActions.login());
              }
              else{
                alert("Please fill in all fields");
              }
            }}
          />
        </div>
        <div className="divider">or</div>
        <div>
          {_.map(listOfSSOBtns, (btn: any) => (
            <CommonButton
              buttonName={btn?.buttonName}
              key={btn?.buttonName}
              imgIcon={btn?.imgIcon}
              imgAltText={""}
              btnClassName="outliner"
              btnClickHandler={btn?.btnClickHandler}
            />
          ))}
        </div>
        <div>
          <span className="services">
            By accessing RealSatisfied you agree to our
          </span>
          <LinkText
            btnClickHandler={() => alert("Yet")}
            btnName="Terms of Service."
          />
        </div>
      </div>
    </Card>
  );
};

export default RadixLoginCard;
