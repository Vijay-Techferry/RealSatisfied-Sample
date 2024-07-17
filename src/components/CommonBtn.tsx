import { FC } from 'react';
import { CommonBtnType } from '../utilities/types';


const CommonBtn:FC<CommonBtnType> = ({btnClass,btnStyle,btnClickHandler,btnName}) => <button className={btnClass} style={btnStyle} onClick={btnClickHandler}>{btnName}</button>
  


export default CommonBtn