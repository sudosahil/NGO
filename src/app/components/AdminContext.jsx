'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext(null);

const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'earthen2024',
};

export function AdminProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem('earthen_admin');
        if (stored === 'true') setIsLoggedIn(true);
    }, []);

    const login = (username, password) => {
        if (
            username === ADMIN_CREDENTIALS.username &&
            password === ADMIN_CREDENTIALS.password
        ) {
            sessionStorage.setItem('earthen_admin', 'true');
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        sessionStorage.removeItem('earthen_admin');
        setIsLoggedIn(false);
    };

    return (
        <AdminContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAdmin must be used within AdminProvider');
    return context;
}
