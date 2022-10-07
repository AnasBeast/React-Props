import React from 'react'
import PropTypes from 'prop-types'

const Profile = (data) => {
  const userInfo = data.data;
  return (
    <div style={{height:"100vh","backgroundImage":"url(https://gomytech.gomycode.co/content/images/2020/12/bah-launch-01-min.jpg)","backgroundSize":"cover"}}>
        {data.children}
        <h1 style={{textDecoration: "underline",color:"white",fontWeight:"bold",fontSize:"36px"}}>
            {userInfo.fullName}
        </h1>
        <h1 style={{color:"white"}}>{userInfo.bio}</h1>
        <h1 style={{color:"white"}}>{userInfo.profession}</h1>
        {userInfo.funct(userInfo.fullName)}
    </div>
  )
}
Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
}
export default Profile