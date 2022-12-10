import styles from './ProfileInfo.module.css';
import { AuthContext } from '../../Store/AuthContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';


function ProfileInfo() {

    const authContx = useContext(AuthContext);
    const history = useHistory();



    const logoutHandler = () => {
        // console.log(authContx.user);
        authContx.logout();
        localStorage.removeItem('loginItems');
        
        history.replace('/authentication')
    }

    return (
        <div className={styles['profile-info-sec']}>
           
            <div>
                {/* <svg fill="currentColor" viewBox="0 0 448 512" className="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg> */}
                Email : <span className={styles['profile-data']}>{authContx.user.email}</span></div>
            <div>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    );
}

export default ProfileInfo;