import React from 'react';

const Sidebar = props => {

  const {name, label, website, phone, email, location, profiles} = props.jsonObj;
  console.log(props.jsonObj);
  return(
    <div className="view-type">
      <div className="name">
        {name}
      </div>
      <div className="sub-label">{label}</div>
      <div className="sub-label">{website}</div>
      <div className="address">
        <div className="social-icons">
        {website && <a href={website} target="_blank"><i className="fa social-icon fa-globe fa-2x" aria-hidden="true"></i></a>}

          {profiles.map((profile, index) => {
            switch (profile.network) {
              case "Facebook":
                return <a href={profile.url} key={index} target="_blank"><i className="fa social-icon fa-facebook-official fa-2x" aria-hidden="true"></i></a>
              case "LinkedIn":
                return <a href={profile.url} key={index} target="_blank"><i className="fa social-icon fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
              case "GitHub" || "Github":
                return <a href={profile.url} key={index} target="_blank"><i className="fa social-icon fa-github fa-2x" aria-hidden="true"></i></a>
              case "Twitter":
                return <a href={profile.url} key={index} target="_blank"><i className="fa social-icon fa-twitter fa-2x" aria-hidden="true"></i></a>
              default:
                return <a href={profile.url} key={index} target="_blank"><i className="fa social-icon fa-globe fa-2x" aria-hidden="true"></i></a>
            }
          })}


        </div>
        {location.address}<br />
        {location.city} {location.region} {location.postalcode}
        <div>
          <br />
          {phone}
          <br />
          {email}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
