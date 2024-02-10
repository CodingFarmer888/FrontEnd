import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {

    // 帳號
    const [username, setUsername] = useState("");
    // 密碼
    const [password, setPassword] = useState("");
    // 錯誤訊息
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const loginAction = () => {
        axios.post("http://localhost:8080/login", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data);
            let user = response.data;
            // 登入成功，將使用者資料set至App元件
            setUser(user);
            navigate("/");
        }).catch((error) => {
            console.log("error", error.response.data);
            // 更新錯誤訊息狀態
            setErrorMessage(error.response.data.message);
        });

    }

    return (
        <>
            <div className="page-title">Login</div>

            <div className="login-container">
                <h3>輸入帳戶密碼</h3>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td>帳戶 *</td>
                            <td><input name="username" onChange={changeUsername} /></td>
                        </tr>
                        <tr>
                            <td>密碼 *</td>
                            <td><input type="password" name="password" onChange={changePassword} /></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <input type="submit" value="Login" onClick={loginAction}/>
                                <input type="reset" value="Reset" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <span className="error-message">{errorMessage}</span>
            </div>
            <div>
                <h3>帳號/密碼:</h3>
                <ul>
                    <li>Mary/m123</li>
                    <li>George/g123</li>
                </ul>
            </div>
        </>
    );
}

export default Login;
