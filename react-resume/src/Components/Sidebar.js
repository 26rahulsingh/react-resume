import React from 'react';

const Sidebar = props => {

  const {name, website, phone, email, location} = props.jsonObj;

  return(
    <div className="view-type">
      <div className="name">
        John Williamson
      </div>
      <div className="address">
        <div className="social-icons">
          <a href="http://jjs.life" target="_blank"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></a>
          <a href="http://facebook.com/John.J.95" target="_blank"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
          <a href="https://github.com/velua" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a href="http://linkedin.com/in/jjwilliamson" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://twitter.com/velua" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
        </div>
        {location.address}<br />
        {location.city} {location.region} {location.postalcode}
        <div>
          <br />
          {phone}
          {email}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
