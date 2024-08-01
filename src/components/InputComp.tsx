import * as Form from "@radix-ui/react-form";
import "./loginCard.css";
import { Fragment } from "react/jsx-runtime";

export interface InputCompProp {
  fieldName: string;
  inputType: string;
  inputValue: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeHandler: (e: any) => void;
  inputImgData?: {
    src: string;
    inputImgAltText: string;
    imgClickHandler:()=>void;
    fromLeft?: string;
    fromRight?: string;
  };
  inputPlaceholder?: string;
}
const InputComp = ({
  fieldName,
  inputType,
  inputValue,
  onChangeHandler,
  inputImgData,
  inputPlaceholder,
  
}:InputCompProp ) => {
  return (
    <Form.Root className="formRootClass">
      <Form.Field className="FormField" name={fieldName}>
        <Form.Label className="FormLabel">{fieldName}</Form.Label>
        <div style={{ display: "flex", position: "relative" }}>
          <input
            className="formInput"
            type={inputType}
            value={inputValue}
            onChange={onChangeHandler}
            placeholder={inputPlaceholder}
          />
          {inputImgData?.src && (
            <img
              style={{
                position: "absolute",
                right: inputImgData?.fromRight ?? "10px",
                left: inputImgData?.fromLeft  ?? "",
                alignSelf: "center",
                zIndex: "10",
                cursor: "pointer",
              }}
              onClick={inputImgData?.imgClickHandler}
              src={inputImgData?.src}
              alt={inputImgData?.inputImgAltText}
            />
          )}
        </div>
      </Form.Field>
    </Form.Root>
  );
};

export default InputComp;
