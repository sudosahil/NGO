'use client';

import { AdminProvider } from '../components/AdminContext';

export default function AdminLayout({ children }) {
    return (
        <AdminProvider>
            {children}
        </AdminProvider>
    );
}
