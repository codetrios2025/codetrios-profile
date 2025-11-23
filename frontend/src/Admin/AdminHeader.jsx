import React from 'react';
import Style from './adminstyle/LoginForm.module.css'

const AdminHeader = () => {
    return (
        <header className={Style.header}>
            <h1 className={Style.title}>TQCert Admin</h1>
            
        </header>
    );
};


export default AdminHeader;
