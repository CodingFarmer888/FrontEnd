import React from 'react'

const Toast = () => {
    return (
        <div id="testToast" aria-live="polite" aria-atomic="true" className="bg-dark position-relative bd-example-toasts">
            <div className="toast-container position-absolute p-3" id="toastPlacement">
                <div className="toast" >
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toast
