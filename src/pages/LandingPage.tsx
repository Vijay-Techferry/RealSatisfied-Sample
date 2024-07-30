import React from 'react'

const LandingPage = () => {
   
  return ( <div className="s-layout">
    <div className="s-layout__sidebar">
      <a className="s-sidebar__trigger" href="#0">
         <i className="fa fa-bars"></i>
      </a>
    
      <nav className="s-sidebar__nav">
         <ul>
            <li>
               <a className="s-sidebar__nav-link" href="#0">
                  <i className="fa fa-home"></i><em>Home</em>
               </a>
            </li>
            <li>
               <a className="s-sidebar__nav-link" href="#0">
                 <i className="fa fa-user"></i><em>My Profile</em>
               </a>
            </li>
            <li>
               <a className="s-sidebar__nav-link" href="#0">
                  <i className="fa fa-camera"></i><em>Camera</em>
               </a>
            </li>
         </ul>
      </nav>
    </div>
    
    
    </div>)
}

export default LandingPage