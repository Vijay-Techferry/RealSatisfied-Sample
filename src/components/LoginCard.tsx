import "./loginCard.css";
const LoginCard = () => {
  return (
    <div className="d-flex d-md-flex col-md-4 ms-md-3 px-md-4 flex-column">
    <div className="form-signin px-4 py-4 d-flex m-auto ms-md-1 me-md-5" style={{backgroundColor:"#FFFFFF"}}>
      <div className="mx-2">
        <h2 className="mb-3 mt-2 login-text">Log In</h2>
        <p className="pt-1">
          Need a RealSatisfied account?{" "}
          <a className="sign-up ms-2" href="{{ url('/sign_up')}}">
            Sign Up
          </a>
        </p>
        <div
          id="error_dialog"
          className="alert alert-danger d-none align-items-center"
          role="alert"
        >
          <img
            src="/version/{{env('environment.version')}}/images/info.svg"
            alt="info"
            height="20px"
            width="20px"
          />
          <p id="error_msg" className="ms-2"></p>
        </div>
        <form className="login-form" role="form">
          <label className="mt-3">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            id="user_name"
            name="user_name"
            value="{{ old('user_name') }}"
          />
          <div className="password-container">
            <label className="mt-3">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              name="password"
            />
            <img
              className="eye"
              src="/version/{{env('environment.version')}}/images/eye.svg"
              id="eye"
              alt=""
            />
            <i className="fa-solid fa-eye" id="eye"></i>
          </div>
          <div className="d-flex mt-2 mb-2 align-items-center justify-content-between">
            <div className="form-check mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="remember-me"
                name="remember"
              />
              <label className="form-check-label" htmlFor="remember-me">
                Keep me logged in
              </label>
            </div>
            <a
              className="link-small forget-link"
              href="{{ url('/forget_password')}}"
            >
              Forgot password?
            </a>
          </div>
          <button
            className="mt-3 w-100 btn btn-lg btn-primary"
            type="submit"
            id="login_form_submit"
          >
            Log In
          </button>
          <div className="divider mt-3 mb-3">or</div>
          <input
            id="google_client_id"
            value="{{ env('services.google_client_id')}}"
            type="hidden"
          />
          <div id="fb-root"></div>
          <div
            id="fSignInWrapper"
            onClick={() => {
              console.log("Click1");
            }}
          >
            <button
              className="w-100 mt-1 mb-1 btn btn-lg btn-secondary"
              type="button"
            >
              <img
                className="me-2"
                src="/version/{{env('environment.version')}}/images/new_r2/icon-fb.svg"
                alt=""
              />
              Log in with Facebook
            </button>
          </div>
          <div
            className="col-lg-12 col-md-12 mb-1 gSignInclassName"
            id="gSignInWrapper1"
          >
            <button
              id="gSignInWrapper"
              className="mt-3 mb-4 w-100 btn btn-lg btn-secondary"
              type="button"
            >
              <img
                className="me-2"
                src="/version/{{env('environment.version')}}/images/new_r2/icon-google.svg"
                alt=""
              />
              Log in with Google
            </button>
          </div>
          <span className="p-small">
            By accessing RealSatisfied you agree to our
          </span>
          <a
            className="link-small"
            target="_blank"
            href="https://www.realsatisfied.com/terms"
          >
            Terms of Service.
          </a>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginCard;
