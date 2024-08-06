import classes from "./header.module.css"
const Header = () => {
  return (
    <div
        className={classes.headerTop}
       
      >
        <header
          className={classes.navHeader}
          
        >
          <div
            className={classes.welcomeBox}
           
          >
            <div
              id={classes.welcomeContent}
             
            >
              <p
                className={classes.welcomeText}
                
              >
               Name
              </p>
              <p
                className={classes.welcomeDate}
                
              >
                {" "}
                Friday, August 02, 2024{" "}
              </p>
            </div>
            <div
              className={classes.upgradeToPro}
              
            >
              <div
               className={classes.upgradeToProBox}
              >
                <a
                  id="upgrade-to-pro"
                  className={classes.dashboardBtn}
                  href="https://stage-v2.realsatisfied.com/upgrade?token=803c7b287ce0fec63c2&chk=56f76"
                  
                >
                  Upgrade to PRO
                </a>
              </div>
              <div
                className={classes.proHeadBox}
                
              >
                <p
                  className={classes.upgradeHeader}
                  
                >
                  Your account is Agent LITE.
                </p>
                <p
                  className={classes.upgradeBody}
                  
                >
                  Upgrade for unlimited testimonials.
                </p>
              </div>
            </div>
          </div>
          <div
            className={classes.navContainerMob}
           
          >
            <div
              className={classes.navItems}
              
            >
              <button
                className={classes.navToggle}
                type="button"
                
              >
                <div
                  className={classes.navSections}
                 
                />
                <div
                  className={classes.navSections}
                />
                <div
                  className={classes.navSections}
                />
              </button>
              <a
                href="/#"
               className={classes.companyLogoBox}
              >
                <img
                  src="https://stage-v2.realsatisfied.com/images/dashboard-logo-rs.svg"
                  className={classes.logoImg}
                />
              </a>
              <img
                className={classes.headerOfficeLogo}
                src="https://stage-v2.realsatisfied.com/api/v2/exclusion/get_image?id=a6f0bf2a8c2c7894183&created_date=55f8f"
                
              />
              <div
                className={classes.headerLogoGap}
               
              >
                <div
                  className={classes.headerNotify}
                 
                >
                  <div
                    className={classes.headerDropDown}
                    
                  >
                    <div
                      className={classes.navSections}
                     
                    >
                      <a
                        className={classes.profileTip}
                        aria-expanded="false"
                        href="https://stage-v2.realsatisfied.com/agent_dashboard#"
                        role="button"
                        
                      >
                        <div
                          className={classes.notificationCount}
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
  )
}

export default Header