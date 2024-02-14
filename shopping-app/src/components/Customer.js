import React, { useState } from 'react';

const Customer = () => {
    const [formData, setFormData] = useState({});

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const checkout = () => {
        console.log("formData", formData);
    }

    return (
        <>
            <div className="page-title">輸入客戶資料</div>
            <table>
                <tbody>
                    <tr>
                        <td>名字 *</td>
                        <td><input name="name" onChange={changeHandler} /></td>
                        <td>
                            <span className="error-message"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>電子郵件 *</td>
                        <td><input name="email" onChange={changeHandler} /></td>
                        <td>
                            <span className="error-message"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>電話 *</td>
                        <td><input name="phone" onChange={changeHandler} /></td>
                        <td>
                            <span className="error-message"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>地址 *</td>
                        <td><input name="address" onChange={changeHandler} /></td>
                        <td>
                            <span className="error-message"></span>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td><input type="submit" value="儲存" onClick={checkout}/>
                            <input type="reset" value="重置" />
                        </td>
                    </tr>

                </tbody>

            </table>
        </>
    );
}

export default Customer;
