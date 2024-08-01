import styles from "./fomco.module.css";
export default function LoginCard() {
  return (
    <>
      <div
        className={styles.formHeader}
      >
        <div
          className={styles.formSubHeader}
          
        >
          <h2
            className={styles.loginText}
            
          >
            Log In
          </h2>
          <p
            className={styles.needSatisfied}
            
          >
            Need a RealSatisfied account?{" "}
            <a
              className={styles.signUp}
              href="http://app.realsatisfied.com/sign_up"
              
            >
              Sign Up
            </a>
          </p>
          <div
            className={styles.errorDialog}
            role="alert"
           
          >
            <img
              height={20}
              width={20}
              alt="info"
              src="https://app.realsatisfied.com/version/01.98/images/info.svg"
              className={styles.infoDialog}
            />
            <p
              id="error_msg"
              className="ms-2"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                fontSize: "1rem",
                color: "rgb(36, 44, 55)",
                marginBottom: "0rem",
                fontWeight: 400,
                marginLeft: "0.5rem",
              }}
            />
          </div>
          <form
            className="login-form"
            method="GET"
            role="form"
            style={{
              boxSizing: "border-box",
              fontFamily: '"Lato", normal',
              letterSpacing: "normal",
            }}
          >
            <input
              name="_token"
              type="hidden"
              defaultValue="zdhIRNAXmbhH98OcDMLwvuGaDboWWII1524gMMKK"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                paddingTop: "0.86rem",
                paddingBottom: "0.86rem",
                minHeight: "3.24rem",
                borderRadius: "6px",
              }}
            />
            <div
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
              }}
            >
              <label
                className="mt-3 active"
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  letterSpacing: "normal",
                  fontFamily: '"Lato"',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "0.86rem",
                  marginBottom: "0.1875rem",
                  color: "rgb(23, 28, 39)",
                  marginTop: "1rem",
                }}
              >
                Email Address
              </label>
              <input
                id="user_name"
                className="form-control"
                name="user_name"
                type="email"
                placeholder="Email Address"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: '"Lato", normal',
                  letterSpacing: "normal",
                  padding: "0.375rem 0.75rem",
                  border: "1px solid rgb(206, 212, 218)",
                  transition:
                    "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  display: "block",
                  width: "100%",
                  paddingTop: "0.375rem",
                  paddingBottom: "0.375rem",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "rgb(33, 37, 41)",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                  appearance: "none",
                  minHeight: "3.24rem",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div
              className="password-container"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                position: "relative",
              }}
            >
              <label
                className="mt-3 active"
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  letterSpacing: "normal",
                  fontFamily: '"Lato"',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "0.86rem",
                  marginBottom: "0.1875rem",
                  color: "rgb(23, 28, 39)",
                  marginTop: "1rem",
                }}
              >
                Password
              </label>
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
                style={{
                  margin: "0px",
                  fontFamily: '"Lato", normal',
                  letterSpacing: "normal",
                  padding: "0.375rem 0.75rem",
                  border: "1px solid rgb(206, 212, 218)",
                  transition:
                    "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  display: "block",
                  paddingTop: "0.375rem",
                  paddingBottom: "0.375rem",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "rgb(33, 37, 41)",
                  backgroundColor: "rgb(255, 255, 255)",
                  backgroundClip: "padding-box",
                  appearance: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  minHeight: "3.24rem",
                  borderRadius: "6px",
                }}
              />
              <img
                id="eye"
                className="eye"
                src="https://app.realsatisfied.com/version/01.98/images/eye.svg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  fontFamily: '"Lato", normal',
                  letterSpacing: "normal",
                  position: "absolute",
                  top: "62%",
                  width: "1rem",
                  right: "4%",
                  cursor: "pointer",
                  color: "rgb(79, 87, 99)",
                }}
              />
            </div>
            <div
              className="d-flex mt-2 mb-2 align-items-center justify-content-between"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                alignItems: "center",
              }}
            >
              <div
                className="form-check mt-1"
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato", normal',
                  letterSpacing: "normal",
                  display: "block",
                  minHeight: "1.5rem",
                  paddingLeft: "1.5em",
                  marginBottom: "0.125rem",
                  marginTop: "0.25rem",
                }}
              >
                <input
                  id="remember-me"
                  className="form-check-input"
                  name="remember"
                  type="checkbox"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: '"Lato", normal',
                    letterSpacing: "normal",
                    backgroundPosition: "center center",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    height: "1em",
                    verticalAlign: "top",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    appearance: "none",
                    printColorAdjust: "exact",
                    width: "0.9375rem",
                    cssFloat: "left",
                    marginLeft: "-1.5em",
                    borderRadius: "0.1875rem",
                    minHeight: "0.9375rem",
                    paddingTop: "0.125rem",
                    paddingBottom: "0.125rem",
                    marginTop: "0.3125rem",
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="remember-me"
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    letterSpacing: "normal",
                    fontFamily: '"Lato"',
                    fontStyle: "normal",
                    fontSize: "0.86rem",
                    marginBottom: "0.1875rem",
                    color: "rgb(36, 44, 55)",
                    fontWeight: 400,
                  }}
                >
                  {"Keep me logged in"}
                </label>
              </div>
              <a
                className="link-small forget-link"
                href="http://app.realsatisfied.com/forget_password"
                style={{
                  boxSizing: "border-box",
                  letterSpacing: "normal",
                  textDecoration: "none",
                  fontFamily: '"Lato"',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "0.86rem",
                  lineHeight: "1.25rem",
                  color: "rgb(27, 74, 128)",
                }}
              >
                Forgot password?
              </a>
            </div>
            <button
              id="login_form_submit"
              className="mt-3 w-100 btn btn-lg btn-primary"
              type="submit"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                textTransform: "none",
                letterSpacing: "normal",
                appearance: "button",
                textDecoration: "none",
                border: "1px solid transparent",
                transition:
                  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                display: "inline-block",
                lineHeight: 1.5,
                textAlign: "center",
                verticalAlign: "middle",
                userSelect: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                background: "rgb(69, 196, 141)",
                borderColor: "rgb(69, 196, 141)",
                height: "3rem",
                fontFamily: '"Lato"',
                fontStyle: "normal",
                fontSize: "1.11rem",
                fontWeight: 600,
                backgroundColor: "rgb(69, 196, 141)",
                color: "rgb(255, 255, 255)",
                cursor: "pointer",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              Log In
            </button>
            <div
              className="divider mt-3 mb-3"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "1.125rem",
                color: "rgb(36, 44, 55)",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              or
            </div>
            <input
              id="google_client_id"
              type="hidden"
              defaultValue="549311689216-0dtl7p055t8dlrrg13g2pv1471ccofr1.apps.googleusercontent.com"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                paddingTop: "0.86rem",
                paddingBottom: "0.86rem",
                minHeight: "3.24rem",
                borderRadius: "6px",
              }}
            />
            <div
              id="fb-root"
              className="fb_reset"
              style={{
                boxSizing: "border-box",
                background: "none",
                border: "0px",
                fontVariant: "normal",
                margin: "0px",
                overflow: "visible",
                padding: "0px",
                textDecoration: "none",
                whiteSpace: "normal",
                borderSpacing: "0px",
                color: "rgb(0, 0, 0)",
                cursor: "auto",
                direction: "ltr",
                fontFamily:
                  '"lucida grande", tahoma, verdana, arial, sans-serif',
                fontSize: "11px",
                fontStyle: "normal",
                fontWeight: "normal",
                letterSpacing: "normal",
                lineHeight: 1,
                textAlign: "left",
                textIndent: "0px",
                textShadow: "none",
                textTransform: "none",
                visibility: "visible",
                wordSpacing: "normal",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato", normal',
                  letterSpacing: "normal",
                  overflow: "hidden",
                  position: "absolute",
                  top: "-10000px",
                  width: "0px",
                  height: "0px",
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato", normal',
                    letterSpacing: "normal",
                  }}
                />
              </div>
            </div>
            <div
              id="fSignInWrapper"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
              }}
            >
              <button
                className="w-100 mt-1 mb-1 btn btn-lg btn-secondary"
                type="button"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  textTransform: "none",
                  letterSpacing: "normal",
                  appearance: "button",
                  textDecoration: "none",
                  transition:
                    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  display: "inline-block",
                  lineHeight: 1.5,
                  textAlign: "center",
                  verticalAlign: "middle",
                  userSelect: "none",
                  borderColor: "rgb(108, 117, 125)",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(215, 217, 219)",
                  height: "3rem",
                  fontFamily: '"Lato"',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "1rem",
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(79, 87, 99)",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              >
                <img
                  className="me-2"
                  src="https://app.realsatisfied.com/version/01.98/images/new_r2/icon-fb.svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    fontFamily: '"Lato", normal',
                    letterSpacing: "normal",
                    marginBottom: "0.125rem",
                    marginRight: "0.5rem",
                  }}
                />
                {"Log in with Facebook"}
              </button>
            </div>
            <div
              id="gSignInWrapper1"
              className="col-lg-12 col-md-12 mb-1 gSignInClass"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato", normal',
                letterSpacing: "normal",
                flex: "0 0 auto",
                width: "100%",
                display: "inline-block",
                marginBottom: "0.25rem",
              }}
            >
              <button
                id="gSignInWrapper"
                className="mt-3 mb-4 w-100 btn btn-lg btn-secondary"
                type="button"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  textTransform: "none",
                  letterSpacing: "normal",
                  appearance: "button",
                  textDecoration: "none",
                  transition:
                    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  display: "inline-block",
                  lineHeight: 1.5,
                  textAlign: "center",
                  verticalAlign: "middle",
                  userSelect: "none",
                  borderColor: "rgb(108, 117, 125)",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(215, 217, 219)",
                  height: "3rem",
                  fontFamily: '"Lato"',
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "1rem",
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(79, 87, 99)",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  className="me-2"
                  src="https://app.realsatisfied.com/version/01.98/images/new_r2/icon-google.svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    fontFamily: '"Lato", normal',
                    letterSpacing: "normal",
                    marginBottom: "0.125rem",
                    marginRight: "0.5rem",
                  }}
                />
                {"Log in with Google"}
              </button>
            </div>
            <span
              className="p-small"
              style={{
                boxSizing: "border-box",
                letterSpacing: "normal",
                fontFamily: '"Lato"',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "0.86rem",
                color: "rgb(36, 44, 55)",
              }}
            >
              By accessing RealSatisfied you agree to our
            </span>
            <a
              className="link-small"
              href="https://www.realsatisfied.com/terms"
              target="_blank"
              style={{
                boxSizing: "border-box",
                letterSpacing: "normal",
                textDecoration: "none",
                fontFamily: '"Lato"',
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "0.86rem",
                lineHeight: "1.25rem",
                color: "rgb(27, 74, 128)",
              }}
            >
              Terms of Service.
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
