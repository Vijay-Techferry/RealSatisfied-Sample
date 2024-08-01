import { useDispatch } from 'react-redux'
import { loginActions } from '../store/loginSlice';
import CommonButton from '../components/CommonButton';

const LandingPage = () => {
   const dispatch = useDispatch();
   const logOutHandler = ()=>{
      dispatch(loginActions.logout());
   }
  return (
    <CommonButton buttonName={'LogOut'} imgIcon={''} imgAltText={''} btnClickHandler={logOutHandler} /> )
}

export default LandingPage