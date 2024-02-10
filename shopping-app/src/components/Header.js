import React, {useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Header = () => {
    // 取得UserContext.Provider所提供的user，使用useContext可以不用將user當作props傳遞
    const userContext = useContext(UserContext);
    const {user, setUser}  = userContext;
    console.log('userContext', userContext);

    const navigate = useNavigate();

    const changeRoute = (router) => {
        navigate(router);
    }

    const logoutHandler = () => {
        setUser(null);
        navigate('/login');
    }
    return (
        <div className="header-container">
            <div className="site-name">線上購物</div>
            <div className="header-bar">
                    Hello <span>{user && user.username}</span>
                    &nbsp;|&nbsp;
                    {
                        user ? <a onClick={() => logoutHandler()}>登出</a> : <a onClick={() => changeRoute("/login")}>登入</a>
                    }
            </div>
        </div>
    );
}

export default Header;
