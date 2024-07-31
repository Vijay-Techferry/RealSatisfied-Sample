import * as Form from "@radix-ui/react-form";
import "./loginCard.css"
import { Fragment } from "react/jsx-runtime";


const InputComp = ({
  fieldName,
  helperText,
  inputType,
  inputValue,
  onChangeHandler
}: {
  fieldName: string;
  helperText: string;
  inputType: string;
  inputValue:string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeHandler:(e:any)=>void
}) => {
  return (
    <Form.Root className="formRootClass">
    <Form.Field className="FormField" name={fieldName}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Form.Label className="FormLabel">{fieldName}</Form.Label>
        <Form.Message className="FormMessage" match="valueMissing">
          {helperText}
        </Form.Message>
      </div>
      <Form.Control asChild className="formInput">
        {/* <span> */}
        <input  type={inputType} value={inputValue} onChange={onChangeHandler}  placeholder={fieldName}/> 
        {/* <img src="https://stage-v2.realsatisfied.com/images/eye.svg" alt=""/> */}
        {/* </span> */}
      </Form.Control>
    </Form.Field>
    </Form.Root>
  );
};

export default InputComp;
