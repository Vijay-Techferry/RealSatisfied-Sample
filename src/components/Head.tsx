import React from "react";

export default function Head() {
  return (
    <>
      <div
        className="desktop-head"
        style={{
          boxSizing: "border-box",
          fontFamily: '"Lato"',
          letterSpacing: "1e-7rem",
          display: "block",
        }}
      >
        <header
          className="navbar sticky-top flex-md-nowrap"
          style={{
            boxSizing: "border-box",
            fontFamily: '"Lato"',
            letterSpacing: "1e-7rem",
            background: "rgb(255, 255, 255)",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: "0px",
            padding: "6px 32px",
            paddingTop: "6px",
            paddingBottom: "6px",
            flexWrap: "nowrap",
            zIndex: 50,
          }}
        >
          <div
            className="d-flex flex-row"
            style={{
              boxSizing: "border-box",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="welcome-header-content"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
              }}
            >
              <p
                className="welcome-text"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  letterSpacing: "1e-7rem",
                  marginBottom: "0px",
                  color: "var(--Neutral-600, #4F5763)",
                  fontFeatureSettings: '"liga" 0',
                  fontFamily: "Lato",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                Welcome, Anton{" "}
              </p>
              <p
                className="welcome-date"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  letterSpacing: "1e-7rem",
                  marginBottom: "0px",
                  color: "var(--Neutral-400, #A4A8AF)",
                  fontFeatureSettings: '"clig" 0, "liga" 0',
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                }}
              >
                {" "}
                Thursday, August 01, 2024{" "}
              </p>
            </div>
            <div
              id="upgrade_to_pro"
              className="flex-row upgrade-pro-box ms-3"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                padding: "10px 16px",
                borderRadius: "12px",
                backgroundColor: "rgb(238, 242, 247)",
                display: "none",
                flexDirection: "row",
                marginLeft: "1rem",
                gap: "16px",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                }}
              >
                <a
                  id="upgrade-to-pro"
                  className="btn dashboard-content-box-other-btn"
                  href="https://stage-v2.realsatisfied.com/upgrade?token=803c7b287ce0fec63c2&chk=56f76"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    textDecoration: "none",
                    border: "1px solid transparent",
                    transition:
                      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    cursor: "pointer",
                    userSelect: "none",
                    textAlign: "center",
                    verticalAlign: "middle",
                    padding: "8px 20px",
                    gap: "6px",
                    background: "rgb(28, 86, 153)",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(28, 86, 153)",
                    color: "rgb(255, 255, 255)",
                    height: "40px",
                    overflow: "hidden",
                    fontSize: "1rem",
                  }}
                >
                  Upgrade to PRO
                </a>
              </div>
              <div
                className="d-flex flex-column"
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  className="upgrade-pro-head"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    marginBottom: "0px",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgb(23, 28, 39)",
                    lineHeight: "20px",
                    fontFeatureSettings: '"liga" 0',
                  }}
                >
                  Your account is Agent LITE.
                </p>
                <p
                  className="upgrade-pro-body"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    marginBottom: "0px",
                    fontWeight: 500,
                    fontSize: "12px",
                    color: "rgb(79, 87, 99)",
                    lineHeight: "16px",
                    fontFeatureSettings: '"liga" 0',
                  }}
                >
                  Upgrade for unlimited testimonials.
                </p>
              </div>
            </div>
          </div>
          <div
            className="navbar-nav"
            style={{
              boxSizing: "border-box",
              fontFamily: '"Lato"',
              letterSpacing: "1e-7rem",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0px",
              marginBottom: "0px",
            }}
          >
            <div
              id="dashboard-header-mobile-container"
              className="nav-item text-nowrap d-flex align-items-center gap-4"
              style={{
                boxSizing: "border-box",
                fontFamily: '"Lato"',
                letterSpacing: "1e-7rem",
                marginBottom: "0px",
                display: "flex",
                gap: "1.5rem",
                whiteSpace: "nowrap",
                alignItems: "center",
              }}
            >
              <button
                className="navbar-toggler d-md-none collapsed"
                type="button"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  textTransform: "none",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  appearance: "button",
                  padding: "0.25rem 0.75rem",
                  border: "1px solid transparent",
                  borderRadius: "0.25rem",
                  transition: "box-shadow 0.15s ease-in-out",
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  top: "0.25rem",
                  right: "1rem",
                  display: "none",
                }}
              >
                <div
                  className="bar1"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                  }}
                />
                <div
                  className="bar2"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                  }}
                />
                <div
                  className="bar3"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                  }}
                />
              </button>
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
                  id="dashboard-mobile-logo"
                  src="https://stage-v2.realsatisfied.com/images/dashboard-logo-rs.svg"
                  style={{
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    display: "none",
                  }}
                />
              </a>
              <img
                id="header_office_logo-image"
                className="header_office_logo-image"
                src="https://stage-v2.realsatisfied.com/api/v2/exclusion/get_image?id=a6f0bf2a8c2c7894183&created_date=55f8f"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  width: "auto",
                  maxWidth: "200px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />
              <div
                className="d-flex gap-2"
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <div
                  id="dashboard-header-notify"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                  }}
                >
                  <div
                    id="dropdown_notify_wrapper"
                    className="dropdown"
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Lato"',
                      letterSpacing: "1e-7rem",
                      position: "relative",
                      marginTop: "0px",
                    }}
                  >
                    <div
                      className="top_tooltip_wrapper left"
                      style={{
                        boxSizing: "border-box",
                        fontFamily: '"Lato"',
                        letterSpacing: "1e-7rem",
                      }}
                    >
                      <a
                        className="tooltip_profile"
                        aria-expanded="false"
                        href="https://stage-v2.realsatisfied.com/agent_dashboard#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "underline",
                          color: "rgb(13, 110, 253)",
                          fontFamily: '"Lato"',
                          letterSpacing: "1e-7rem",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          id="notify_count"
                          style={{
                            boxSizing: "border-box",
                            letterSpacing: "1e-7rem",
                            background: "rgb(221, 51, 51)",
                            borderRadius: "50%",
                            border: "3px solid white",
                            position: "absolute",
                            width: "30px",
                            height: "30px",
                            left: "10px",
                            top: "-15px",
                            fontFamily: '"Lato"',
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "14px",
                            lineHeight: "21px",
                            color: "rgb(255, 255, 255)",
                            textAlign: "center",
                            zIndex: 99,
                            paddingTop: "2px",
                            display: "none",
                          }}
                        >
                          {" "}
                        </div>
                        <img
                          id="dashboard-mobile-bell"
                          className="img-fluid"
                          src="https://stage-v2.realsatisfied.com/version/01.98/images/bell.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            fontFamily: '"Lato"',
                            letterSpacing: "1e-7rem",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      </a>
                      <ul
                        id="dropdown_notify_menu"
                        className="dropdown-menu"
                        style={{
                          boxSizing: "border-box",
                          fontFamily: '"Lato"',
                          letterSpacing: "1e-7rem",
                          padding: "0.5rem 0px",
                          margin: "0px",
                          listStyle: "none",
                          zIndex: 1000,
                          minWidth: "10rem",
                          marginTop: "0px",
                          marginBottom: "0px",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(230, 232, 235)",
                          borderRadius: "8px",
                          position: "absolute",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          display: "none",
                        }}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div
                id="dashboard-header-avatar"
                className="d-flex align-items-center"
                style={{
                  boxSizing: "border-box",
                  fontFamily: '"Lato"',
                  letterSpacing: "1e-7rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="dashboard-home-header-avatar-img1"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderImage: "none",
                    borderColor: "#ffffff",
                    borderRadius: "32.68px",
                    overflow: "hidden",
                    height: "43px",
                    width: "43px",
                    zIndex: 2,
                    boxShadow:
                      "rgba(16, 24, 40, 0.1) 0px 1.38065px 2.76129px -1.38065px",
                    marginRight: "6px",
                    backgroundImage:
                      'url("https://stage-v2.realsatisfied.com/api/v2/exclusion/get_image?id=ce818c2a8c2638695cc&created_date=3dfe4")',
                    backgroundSize: "cover",
                  }}
                />
                <div
                  className="dropdown"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Lato"',
                    letterSpacing: "1e-7rem",
                    position: "relative",
                  }}
                >
                  <a
                    aria-expanded="false"
                    href="https://stage-v2.realsatisfied.com/agent_dashboard#"
                    role="button"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "underline",
                      color: "rgb(13, 110, 253)",
                      fontFamily: '"Lato"',
                      letterSpacing: "1e-7rem",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://stage-v2.realsatisfied.com/version/01.98/images/arrow-down.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        fontFamily: '"Lato"',
                        letterSpacing: "1e-7rem",
                      }}
                    />
                  </a>
                  <ul
                    id="avatar-menu"
                    className="dropdown-menu"
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Lato"',
                      letterSpacing: "1e-7rem",
                      margin: "0px",
                      listStyle: "none",
                      zIndex: 1000,
                      display: "none",
                      minWidth: "10rem",
                      marginBottom: "0px",
                      fontSize: "1rem",
                      color: "rgb(33, 37, 41)",
                      textAlign: "left",
                      backgroundColor: "rgb(255, 255, 255)",
                      backgroundClip: "padding-box",
                      borderRadius: "8px",
                      position: "absolute",
                      border: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 10px 0px",
                      marginTop: "7px",
                      padding: "12px",
                      paddingLeft: "12px",
                    }}
                  >
                    <li
                      id="avatar-menu-profile"
                      style={{
                        boxSizing: "border-box",
                        fontFamily: '"Lato"',
                        letterSpacing: "1e-7rem",
                        marginBottom: "0px",
                      }}
                    >
                      <a
                        id="side-nav-profile"
                        className="dropdown-item top-nav-dropdown-item"
                        href="https://stage-v2.realsatisfied.com/Anton-Chekhov"
                        target="_blank"
                        style={{
                          boxSizing: "border-box",
                          letterSpacing: "1e-7rem",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          border: "0px",
                          width: "100%",
                          clear: "both",
                          textAlign: "inherit",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                          color: "rgb(23, 28, 39)",
                          fontFeatureSettings: '"liga" 0',
                          fontFamily: "Lato",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                          display: "flex",
                          alignItems: "center",
                          padding: "6px",
                        }}
                      >
                        <img
                          className="avatar-menu-icon"
                          src="https://stage-v2.realsatisfied.com/version/01.98/images/avatar-menu-profile.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            fontFamily: '"Lato"',
                            letterSpacing: "1e-7rem",
                            marginRight: "8px",
                          }}
                        />
                        Profile Page
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "border-box",
                        fontFamily: '"Lato"',
                        letterSpacing: "1e-7rem",
                      }}
                    >
                      <a
                        id="side-nav-logout"
                        className="dropdown-item top-nav-dropdown-item"
                        href="/#"
                        style={{
                          boxSizing: "border-box",
                          letterSpacing: "1e-7rem",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          border: "0px",
                          width: "100%",
                          clear: "both",
                          textAlign: "inherit",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                          color: "rgb(23, 28, 39)",
                          fontFeatureSettings: '"liga" 0',
                          fontFamily: "Lato",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                          display: "flex",
                          alignItems: "center",
                          padding: "6px",
                        }}
                      >
                        <img
                          className="avatar-menu-icon"
                          src="https://stage-v2.realsatisfied.com/version/01.98/images/avatar-menu-logout.svg"
                          style={{
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            fontFamily: '"Lato"',
                            letterSpacing: "1e-7rem",
                            marginRight: "8px",
                          }}
                        />
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      
    </>
  );
}
