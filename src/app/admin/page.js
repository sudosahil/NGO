'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '../components/AdminContext';
import styles from './page.module.css';

export default function AdminLoginPage() {
    const { isLoggedIn, login } = useAdmin();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // If already logged in, redirect to dashboard
    if (isLoggedIn) {
        router.push('/admin/dashboard');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const success = login(username, password);
        if (success) {
            router.push('/admin/dashboard');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <section className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6 26C6 26 8 18 16 14C24 10 28 4 28 4C28 4 26 12 18 18C14 20.5 10 24 6 26Z" fill="var(--moss-mid)" stroke="var(--moss-deep)" strokeWidth="1.2" />
                    </svg>
                    <h1>Admin Login</h1>
                    <p>Earthen Routes Management Portal</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    {error && <div className={styles.errorMsg}>{error}</div>}

                    <div className={styles.field}>
                        <label htmlFor="admin-user">Username</label>
                        <input
                            type="text"
                            id="admin-user"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="admin-pass">Password</label>
                        <input
                            type="password"
                            id="admin-pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button type="submit" className="btn btn-moss btn-full">
                        Sign In
                    </button>
                </form>
            </div>
        </section>
    );
}
