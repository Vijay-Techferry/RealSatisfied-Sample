/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@radix-ui/themes";
import "./loginCard.css"
import InputComp from "./InputComp";
import { useState } from "react";
import _ from "lodash";
import CommonButton from "./CommonButton";

const RadixLoginCard = () => {
    const [emailValue, setEmailValue] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loggedIn, setloggedIn] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const emailChangeHandler = (e:any)=>setEmailValue(e.target.value);
    const passwordChangeHandler = (e:any)=>setPassword(e.target.value);

    const listOfInputs = [{fieldName:"Email Address",inputType:"email",inputValue:emailValue,onChangeHandler:emailChangeHandler},{fieldName:"Password",inputType:"password",inputValue:password,onChangeHandler:passwordChangeHandler}]

    const listOfSSOBtns = [{ buttonName:"Log in with Facebook",imgIcon:"https://stage-v2.realsatisfied.com/version/01.98/images/new_r2/icon-fb.svg" ,imgAltText:"" },{ buttonName:"Log in with Google",imgIcon:"https://app.realsatisfied.com/version/01.98/images/new_r2/icon-google.svg" ,imgAltText:"" },];
    
  return (
      <Card className="form-signin">
        <div className="innerCard">
        <h2 className="login-text">Log In</h2>
        <div>
        <span className="needAccount">
          Need a RealSatisfied account?{" "}
          </span>
          <span className="sign-up" onClick={()=>alert("Yet to be Implemented")}>
            Sign Up
          </span>
        </div>
        {_.map(listOfInputs,(inp:any)=><InputComp key={inp?.fieldName} fieldName={inp?.fieldName} helperText={""} inputType={inp?.inputType} inputValue={inp?.inputValue} onChangeHandler={inp?.onChangeHandler}/>)}
        <div>
            <span>Forgot Password Section</span>
        </div>
        <div>
            <CommonButton  buttonName={"Log In"} imgIcon={""} imgAltText={""}/>
          
        </div>
        <div>
                or
            </div>
            <div>
{_.map(listOfSSOBtns,(btn:any)=><CommonButton buttonName={btn?.buttonName} key={btn?.buttonName} imgIcon={btn?.imgIcon} imgAltText={""} btnClassName="outliner"/>)}
            </div>

        </div>
       </Card>
  );
};

export default RadixLoginCard;
