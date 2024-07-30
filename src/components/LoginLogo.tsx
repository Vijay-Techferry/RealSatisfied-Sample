import LogoWithHeader from "./LogoWithHeader"

const LoginLogo = () => {
  return (
    <div>
            <LogoWithHeader/>
            <h1 className="mb-0">Welcome to</h1>
        <h1 className="realsatisfied-heading">RealSatisfied</h1>
        <span className="hero-text">
            Designed for Real Estate Professionals
        </span>
        <div className="col px-0" id="rating-box-col">
                <img src="https://stage-v2.realsatisfied.com/version/01.98/images/rating-box.svg" className="img-fluid" id="rating-box" alt=""/>
            </div>
        <div className="hero-image mt-5 row">
            <div className="col px-0">
                <img src="https://stage-v2.realsatisfied.com/version/01.98/images/star-girl.svg" className="img-fluid" id="star-girl" alt=""/>
            </div>
            
        </div>
    </div>
  )
}

export default LoginLogo