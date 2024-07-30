import React from 'react'

const NavBar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse px-0">
    <div className="position-sticky pt-4 sidebar-sticky">
        <div id="dashboard-desktop-logo" className="d-flex justify-content-center mb-4">
            <a href="javascript:navigate_page('home');">
                <img className="img-fluid mt-1" id="desktop_logo_img" src="/version/{{env('environment.version')}}/images/dashboard-logo-rs.svg" alt=""/>
                <img className="img-fluid mt-1" id="tablet_logo_img" src="/version/{{env('environment.version')}}/images/tablet_logo.png" alt=""/>
            </a>
        </div>
        <div id="tablet_menu_icon">
            <img src="/version/{{env('environment.version')}}/images/tablet_menu_icon.svg" alt=""/>
        </div>
        <div className="d-flex flex-column justify-content-between sidebarMenu_wrapper_container" >
            <ul className="nav flex-column">
                <div className="d-md-none d-lg-none d-xl-none d-xxl-none">
                    <li className="nav-item send_survey_nav mobile">
                        <button className="nav-link btn btn-primary sidebar-send-button"><img className="d-none tablet_send_survey_icon" id="tablet_send_survey_icon" src="/version/{{env('environment.version')}}/images/tablet_send_survey.png" alt=""/><span>Send Survey</span></button>
                    </li>
                </div>
                <li className="nav-item left-nav-label">
                    <p>Dashboard</p>
                </li>
                <li className="nav-item">
                    <a className="nav-link home active" aria-current="page" href="javascript:navigate_page('home');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-home.svg" alt=""/> <span>Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link profile" href="javascript:navigate_page('profile');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-profile.svg" alt=""/> <span>Profile</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link surveys" href="javascript:navigate_page('surveys');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-surveys.svg" alt=""/> <span>Surveys</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link testimonials" href="javascript:navigate_page('testimonials');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-testimonials.svg" alt=""/> <span>Testimonials</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link publishing" href="javascript:navigate_page('publishing');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-publishing.svg" alt=""/> <span>Publishing</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link settings" aria-current="page" href="javascript:navigate_page('settings');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-settings.svg" alt=""/> <span>Settings</span> 
                    </a>
                </li>
                <div className="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <li className="nav-item send_survey_nav dashboard">
                        <button className="nav-link btn btn-primary sidebar-send-button"><img className="d-none tablet_send_survey_icon" id="tablet_send_survey_icon" src="/version/{{env('environment.version')}}/images/tablet_send_survey.png" alt=""/><span>Send Survey</span></button>
                    </li>
                </div>
            </ul>
            <ul className="nav flex-column">
                @if($is_demo == "false")
                <li className="nav-item">
                    <a className="nav-link billing" href="javascript:navigate_page('billing');">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-invoices.svg" alt=""/> <span>Billing</span>
                    </a>
                </li>
                @endif
                <li className="nav-item">
                    <a className="nav-link help" href="javascript:callHelp();">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-help.svg" alt=""/> <span>Help</span>
                    </a>
                </li>
                <li className="nav-item left-nav-label">
                    <p>General</p>
                </li>
                <li className="nav-item mb-0" id="mobile-profile-link">
                    <a className="nav-link" target="_blank" href="{{env('environment.profile_url')}}/{{$agent_info['agent_info']['vanity_key']}}">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-profile.svg" alt=""/>
                        Profile Page
                    </a>
                </li>
                <li className="nav-item mb-0">
                    <a className="nav-link logout" href="javascript:logout();">
                        <img src="/version/{{env('environment.version')}}/images/sidebar-logout.svg" alt=""/> <span>Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavBar