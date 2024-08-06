import React from 'react'

const SideBar = () => {
  return (
    <div
    className="position-sticky pt-4 sidebar-sticky"
    style={{
      boxSizing: "border-box",
      fontFamily: '"Lato"',
      letterSpacing: "1e-7rem",
      overflow: "hidden auto",
      height: "calc(-24px + 100vh)",
      position: "sticky",
      paddingTop: "1.5rem",
    }}
  >
    <div
      id="dashboard-desktop-logo"
      className="d-flex justify-content-center mb-4"
      style={{
        boxSizing: "border-box",
        fontFamily: '"Lato"',
        letterSpacing: "1e-7rem",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        marginBottom: "58px",
      }}
    >
      <a
        href="/#"
        style={{
          boxSizing: "border-box",
          textDecoration: "underline",
          color: "rgb(13, 110, 253)",
          fontFamily: '"Lato"',
          letterSpacing: "1e-7rem",
        }}
      >
        <img
          id="desktop_logo_img"
          className="img-fluid mt-1"
          src="https://stage-v2.realsatisfied.com/version/01.98/images/dashboard-logo-rs.svg"
          style={{
            boxSizing: "border-box",
            verticalAlign: "middle",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            maxWidth: "100%",
            height: "auto",
            marginTop: "0.25rem",
          }}
        />
        <img
          id="tablet_logo_img"
          className="img-fluid mt-1"
          src="https://stage-v2.realsatisfied.com/version/01.98/images/tablet_logo.png"
          style={{
            boxSizing: "border-box",
            verticalAlign: "middle",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            maxWidth: "100%",
            height: "auto",
            display: "none",
            marginTop: "0.25rem",
          }}
        />
      </a>
    </div>
    <div
      id="tablet_menu_icon"
      style={{
        boxSizing: "border-box",
        fontFamily: '"Lato"',
        letterSpacing: "1e-7rem",
      }}
    >
      <img
        src="https://stage-v2.realsatisfied.com/version/01.98/images/tablet_menu_icon.svg"
        style={{
          boxSizing: "border-box",
          verticalAlign: "middle",
          fontFamily: '"Lato"',
          letterSpacing: "1e-7rem",
          display: "none",
        }}
      />
    </div>
    <div
      className="d-flex flex-column justify-content-between sidebarMenu_wrapper_container"
      style={{
        boxSizing: "border-box",
        fontFamily: '"Lato"',
        letterSpacing: "1e-7rem",
        height: "calc(100% - 100px)",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ul
        className="nav flex-column"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          fontFamily: '"Lato"',
          letterSpacing: "1e-7rem",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "0px",
          marginBottom: "0px",
          flexDirection: "column",
        }}
      >
        <div
          className="d-md-none d-lg-none d-xl-none d-xxl-none"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            display: "none",
          }}
        >
          <li
            className="nav-item send_survey_nav mobile"
            style={{
              boxSizing: "border-box",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              display: "list-item",
            }}
          >
            <button
              className="nav-link btn btn-primary sidebar-send-button"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                textTransform: "none",
                appearance: "button",
                letterSpacing: "1e-7rem",
                userSelect: "none",
                borderColor: "rgb(13, 110, 253)",
                textDecoration: "none",
                transition:
                  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
                alignItems: "center",
                borderRadius: "6px",
                padding: "8px 16px",
                paddingLeft: "16px",
                display: "inline-block",
                verticalAlign: "middle",
                border: "medium",
                background: "rgb(59, 184, 130)",
                backgroundColor: "rgb(59, 184, 130)",
                width: "fit-content",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                fontFeatureSettings: '"clig" 0, "liga" 0',
                fontFamily: '"Lato"',
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "22px",
                height: "44px",
                cursor: "pointer",
                marginTop: "9px",
                marginLeft: "33px",
                marginRight: "33px",
                fontSize: "1rem",
              }}
            >
              <img
                id="tablet_send_survey_icon"
                className="d-none tablet_send_survey_icon"
                src="https://stage-v2.realsatisfied.com/version/01.98/images/tablet_send_survey.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  marginRight: "12px",
                  width: "20px",
                  height: "20px",
                  display: "none",
                }}
              />
              <span
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                }}
              >
                Send Survey
              </span>
            </button>
          </li>
        </div>
        <li
          className="nav-item left-nav-label"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            display: "none",
          }}
        >
          <p
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              marginBottom: "0px",
            }}
          >
            Dashboard
          </p>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link home active"
            aria-current="page"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
              borderRight: "4px solid rgb(69, 196, 141)",
              backgroundColor: "rgb(23, 28, 39)",
              fontWeight: 500,
              color: "rgb(69, 196, 141)",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-home.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
                filter:
                  "brightness(0) saturate(100%) invert(81%) sepia(7%) saturate(3891%) hue-rotate(95deg) brightness(79%) contrast(78%)",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Home
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link profile"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-profile.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Profile
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link surveys"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-surveys.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Surveys
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link testimonials"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-testimonials.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Testimonials
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link publishing"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-publishing.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Publishing
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link settings"
            aria-current="page"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-settings.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Settings
            </span>
          </a>
        </li>
        <div
          className="d-none d-md-block d-lg-block d-xl-block d-xxl-block"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            display: "block",
          }}
        >
          <li
            className="nav-item send_survey_nav dashboard"
            style={{
              boxSizing: "border-box",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              marginTop: "15px",
              display: "list-item",
            }}
          >
            <button
              className="nav-link btn btn-primary sidebar-send-button"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                textTransform: "none",
                appearance: "button",
                letterSpacing: "1e-7rem",
                userSelect: "none",
                borderColor: "rgb(13, 110, 253)",
                textDecoration: "none",
                transition:
                  "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
                alignItems: "center",
                borderRadius: "6px",
                padding: "8px 16px",
                paddingLeft: "16px",
                display: "inline-block",
                verticalAlign: "middle",
                border: "medium",
                background: "rgb(59, 184, 130)",
                backgroundColor: "rgb(59, 184, 130)",
                width: "fit-content",
                color: "rgb(255, 255, 255)",
                textAlign: "center",
                fontFeatureSettings: '"clig" 0, "liga" 0',
                fontFamily: '"Lato"',
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "22px",
                height: "44px",
                cursor: "pointer",
                marginTop: "9px",
                marginLeft: "33px",
                marginRight: "33px",
                fontSize: "1rem",
              }}
            >
              <img
                id="tablet_send_survey_icon"
                className="d-none tablet_send_survey_icon"
                src="https://stage-v2.realsatisfied.com/version/01.98/images/tablet_send_survey.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  marginRight: "12px",
                  width: "20px",
                  height: "20px",
                  display: "none",
                }}
              />
              <span
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                }}
              >
                Send Survey
              </span>
            </button>
          </li>
        </div>
      </ul>
      <ul
        className="nav flex-column"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          fontFamily: '"Lato"',
          letterSpacing: "1e-7rem",
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "0px",
          marginBottom: "0px",
          flexDirection: "column",
        }}
      >
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link billing"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-invoices.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Billing
            </span>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
          }}
        >
          <a
            className="nav-link help"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-help.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Help
            </span>
          </a>
        </li>
        <li
          className="nav-item left-nav-label"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            display: "none",
          }}
        >
          <p
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              marginBottom: "0px",
            }}
          >
            General
          </p>
        </li>
        <li
          id="mobile-profile-link"
          className="nav-item mb-0"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            display: "none",
            marginBottom: "0px",
          }}
        >
          <a
            className="nav-link"
            href="https://stage-v2.realsatisfied.com/Anton-Chekhov"
            target="_blank"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-profile.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />
            {"Profile Page"}
          </a>
        </li>
        <li
          className="nav-item mb-0"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            marginBottom: "0px",
          }}
        >
          <a
            className="nav-link logout"
            href="/#"
            style={{
              boxSizing: "border-box",
              letterSpacing: "1e-7rem",
              padding: "0.5rem 1rem",
              textDecoration: "none",
              transition:
                "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
              height: "48px",
              display: "flex",
              paddingLeft: "33px",
              color: "rgb(189, 194, 201)",
              textAlign: "center",
              fontFeatureSettings: '"liga" 0',
              fontFamily: '"Lato"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              verticalAlign: "middle",
              alignItems: "center",
            }}
          >
            <img
              src="https://stage-v2.realsatisfied.com/version/01.98/images/sidebar-logout.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginRight: "12px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            <span
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              Log Out
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default SideBar