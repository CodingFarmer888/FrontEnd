import React, { useState } from 'react';

const Login = () => {

    const [formValues] = useState();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
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
                                <input type="submit" value="Login" />
                                <input type="reset" value="Reset" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <span className="error-message"></span>
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
