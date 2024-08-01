import { Button } from '@radix-ui/themes';
import styles from "./commonButton.module.css"
export interface CommonBtnType{
    buttonName:string;
    imgIcon:string;
    imgAltText:string;
    btnClickHandler:()=>void;
    btnStyle?:object;
    btnClassName?:string;
    imgClass?:string;
    asChild?:boolean;
    btnSize?:"1" | "2" | "3" | "4";
    variant?:"classic"|"solid"|"soft"|"surface"|"outline";
}
const CommonButton = ({buttonName,imgIcon,imgAltText,btnClickHandler,btnStyle,btnClassName,imgClass,asChild,btnSize,variant}:CommonBtnType) => <Button onClick={btnClickHandler} size={btnSize} asChild={asChild?asChild:false} style={btnStyle} variant={variant} className={btnClassName?styles[btnClassName]:styles['primary']}>{imgIcon && <img src={imgIcon} alt={imgAltText} className={imgClass?styles[imgClass]:styles.stdImg}/>}{buttonName}</Button>

export default CommonButton