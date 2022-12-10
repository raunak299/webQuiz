import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import { AuthContext } from "../../Store/AuthContext";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";


function Profile(){
//   const authContx= useContext(AuthContext);
    return(
        <React.Fragment>
        <Navbar />
        <div className={styles['profile-page']}>
            <div className={styles['profile-section']}>
                <h1 className={styles['profile-sec-heading']}>
                    Profile
                </h1>
                <div className={styles['profile-sec-content']}>
                    <ProfileInfo/>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Profile;