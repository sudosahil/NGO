'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '../../components/AdminContext';
import styles from './page.module.css';

/* ---------- Seed Data ---------- */
const SEED_LEADS = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 98765 43210', interest: 'Volunteering', status: 'New', date: '2024-12-15', notes: 'Interested in weekend sessions' },
    { id: 2, name: 'Raj Mehta', email: 'raj.mehta@corp.com', phone: '+91 99887 66554', interest: 'Corporate Visit', status: 'Contacted', date: '2024-12-10', notes: 'Team of 25, Jan visit' },
    { id: 3, name: 'Sunita Patel', email: 'sunita.p@gmail.com', phone: '+91 87654 32109', interest: 'Workshop Registration', status: 'Converted', date: '2024-12-08', notes: 'Kitchen composting workshop' },
    { id: 4, name: 'Arjun Das', email: 'arjun.d@school.edu', phone: '+91 76543 21098', interest: 'School Trip', status: 'New', date: '2024-12-20', notes: 'Class of 40 students, Feb' },
    { id: 5, name: 'Neha Kulkarni', email: 'neha.k@gmail.com', phone: '+91 65432 10987', interest: 'Kitchen Garden Setup', status: 'Follow Up', date: '2024-12-18', notes: 'Apartment balcony garden' },
];

const SEED_BUDGET = [];

const SEED_REACH = [
    { id: 1, metric: 'Instagram Followers', value: 2450, period: 'Dec 2024', trend: 'up' },
    { id: 2, metric: 'Workshop Attendees', value: 48, period: 'Dec 2024', trend: 'up' },
    { id: 3, metric: 'Weekend Volunteers', value: 32, period: 'Dec 2024', trend: 'stable' },
    { id: 4, metric: 'Farm Visitors', value: 125, period: 'Dec 2024', trend: 'up' },
    { id: 5, metric: 'Facebook Reach', value: 8200, period: 'Dec 2024', trend: 'down' },
    { id: 6, metric: 'Produce Harvested (kg)', value: 180, period: 'Dec 2024', trend: 'up' },
    { id: 7, metric: 'New Email Subscribers', value: 15, period: 'Dec 2024', trend: 'stable' },
    { id: 8, metric: 'Corporate Enquiries', value: 6, period: 'Dec 2024', trend: 'up' },
];

/* ---------- Helpers ---------- */
function loadData(key, seed) {
    if (typeof window === 'undefined') return seed;
    const stored = localStorage.getItem(`earthen_${key}`);
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            // Sanitize: strip any computed properties like 'balance'
            return parsed.map(({ balance, ...rest }) => rest);
        } catch {
            return seed;
        }
    }
    localStorage.setItem(`earthen_${key}`, JSON.stringify(seed));
    return seed;
}

function saveData(key, data) {
    localStorage.setItem(`earthen_${key}`, JSON.stringify(data));
}

function nextId(items) {
    return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
}

/* ================================================================
   DASHBOARD
   ================================================================ */
export default function DashboardPage() {
    const { isLoggedIn, logout } = useAdmin();
    const router = useRouter();
    const [tab, setTab] = useState('overview');
    const [mounted, setMounted] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    // Data states
    const [leads, setLeads] = useState([]);
    const [budget, setBudget] = useState([]);
    const [reach, setReach] = useState([]);

    useEffect(() => {
        setMounted(true);
        setLeads(loadData('leads', SEED_LEADS));
        setBudget(loadData('budget', SEED_BUDGET));
        setReach(loadData('reach', SEED_REACH));
    }, []);

    useEffect(() => {
        if (mounted && !isLoggedIn && !loggingOut) router.push('/admin');
    }, [isLoggedIn, mounted, router, loggingOut]);

    const handleLogout = () => {
        setLoggingOut(true);
        logout();
        router.push('/');
    };

    const updateLeads = useCallback((newLeads) => {
        setLeads(newLeads);
        saveData('leads', newLeads);
    }, []);

    const updateBudget = useCallback((newBudget) => {
        setBudget(newBudget);
        saveData('budget', newBudget);
    }, []);

    const updateReach = useCallback((newReach) => {
        setReach(newReach);
        saveData('reach', newReach);
    }, []);

    if (!mounted || !isLoggedIn) return null;

    // Computed stats
    const totalIncome = budget.filter((b) => b.type === 'Income').reduce((s, b) => s + b.amount, 0);
    const totalExpense = budget.filter((b) => b.type === 'Expense').reduce((s, b) => s + b.amount, 0);
    const newLeads = leads.filter((l) => l.status === 'New').length;
    const totalReach = reach.reduce((s, r) => s + r.value, 0);

    const tabs = [
        { key: 'overview', label: 'Overview' },
        { key: 'leads', label: `Leads (${leads.length})` },
        { key: 'budget', label: 'Budget' },
        { key: 'reach', label: 'Reach' },
    ];

    return (
        <section className={styles.dashboard}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarLogo}>
                    <img src="/images/logo.png" alt="Earthen Routes Logo" width="32" height="32" style={{ objectFit: 'contain' }} />
                    <span>Admin Panel</span>
                </div>

                <nav className={styles.sidebarNav}>
                    {tabs.map((t) => (
                        <button
                            key={t.key}
                            className={`${styles.sidebarLink} ${tab === t.key ? styles.sidebarActive : ''}`}
                            onClick={() => setTab(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>

                <button className={styles.logoutBtn} onClick={handleLogout}>
                    ← Sign Out
                </button>
            </aside>

            {/* Main Area */}
            <main className={styles.main}>
                <header className={styles.topBar}>
                    <h1>{tabs.find((t) => t.key === tab)?.label}</h1>
                    <span className={styles.adminBadge}>Admin</span>
                </header>

                <div className={styles.content}>
                    {tab === 'overview' && (
                        <OverviewTab
                            leads={leads}
                            newLeads={newLeads}
                            totalIncome={totalIncome}
                            totalExpense={totalExpense}
                            totalReach={totalReach}
                            setTab={setTab}
                        />
                    )}
                    {tab === 'leads' && <LeadsTab leads={leads} updateLeads={updateLeads} />}
                    {tab === 'budget' && <BudgetTab budget={budget} updateBudget={updateBudget} totalIncome={totalIncome} totalExpense={totalExpense} />}
                    {tab === 'reach' && <ReachTab reach={reach} updateReach={updateReach} />}
                </div>
            </main>
        </section>
    );
}

/* ================================================================
   OVERVIEW TAB
   ================================================================ */
function OverviewTab({ leads, newLeads, totalIncome, totalExpense, totalReach, setTab }) {
    const stats = [
        { label: 'Total Leads', value: leads.length, sub: `${newLeads} new`, color: 'var(--moss-mid)' },
        { label: 'Total Income', value: `₹${totalIncome.toLocaleString()}`, sub: 'This period', color: 'var(--moss-deep)' },
        { label: 'Total Expenses', value: `₹${totalExpense.toLocaleString()}`, sub: 'This period', color: 'var(--harvest-gold)' },
        { label: 'Net Balance', value: `₹${(totalIncome - totalExpense).toLocaleString()}`, sub: totalIncome - totalExpense >= 0 ? 'Surplus' : 'Deficit', color: totalIncome - totalExpense >= 0 ? 'var(--moss-mid)' : '#b42828' },
    ];

    const recentLeads = [...leads].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

    return (
        <>
            <div className={styles.statsGrid}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.statCard} style={{ borderTopColor: s.color }}>
                        <span className={styles.statLabel}>{s.label}</span>
                        <span className={styles.statValue}>{s.value}</span>
                        <span className={styles.statSub}>{s.sub}</span>
                    </div>
                ))}
            </div>

            <div className={styles.overviewSection}>
                <div className={styles.sectionHeader}>
                    <h2>Recent Leads</h2>
                    <button className={styles.linkBtn} onClick={() => setTab('leads')}>View All →</button>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Interest</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentLeads.map((l) => (
                            <tr key={l.id}>
                                <td>{l.name}</td>
                                <td>{l.interest}</td>
                                <td><span className={`${styles.badge} ${styles[`badge${l.status.replace(/\s/g, '')}`]}`}>{l.status}</span></td>
                                <td>{l.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.quickActions}>
                <h2>Quick Actions</h2>
                <div className={styles.actionsGrid}>
                    <button className={styles.actionCard} onClick={() => setTab('leads')}>📋 Manage Leads</button>
                    <button className={styles.actionCard} onClick={() => setTab('budget')}>💰 View Budget</button>
                    <button className={styles.actionCard} onClick={() => setTab('reach')}>📊 Track Reach</button>
                </div>
            </div>
        </>
    );
}

/* ================================================================
   LEADS TAB
   ================================================================ */
function LeadsTab({ leads, updateLeads }) {
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [filter, setFilter] = useState('All');

    const statuses = ['New', 'Contacted', 'Follow Up', 'Converted', 'Lost'];
    const interests = ['Volunteering', 'Group Visit / Event', 'Workshop Registration', 'Kitchen Garden Setup', 'Land Project Consultation', 'Corporate Visit', 'School Trip', 'Sponsorship', 'General Inquiry'];
    const filtered = filter === 'All' ? leads : leads.filter((l) => l.status === filter);

    const handleSave = (formData) => {
        if (editItem) {
            updateLeads(leads.map((l) => (l.id === editItem.id ? { ...formData, id: editItem.id } : l)));
        } else {
            updateLeads([...leads, { ...formData, id: nextId(leads) }]);
        }
        setShowForm(false);
        setEditItem(null);
    };

    const handleDelete = (id) => {
        updateLeads(leads.filter((l) => l.id !== id));
    };

    return (
        <>
            <div className={styles.tabToolbar}>
                <div className={styles.filterGroup}>
                    {['All', ...statuses].map((s) => (
                        <button key={s} className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ''}`} onClick={() => setFilter(s)}>
                            {s}
                        </button>
                    ))}
                </div>
                <button className={`btn btn-moss ${styles.addBtn}`} onClick={() => { setEditItem(null); setShowForm(true); }}>
                    + Add Lead
                </button>
            </div>

            {showForm && (
                <CrudForm
                    key={editItem ? `edit-lead-${editItem.id}` : 'new-lead'}
                    title={editItem ? 'Edit Lead' : 'New Lead'}
                    fields={[
                        { name: 'name', label: 'Name', type: 'text', required: true },
                        { name: 'email', label: 'Email', type: 'email', required: true },
                        { name: 'phone', label: 'Phone', type: 'tel' },
                        { name: 'interest', label: 'Interest', type: 'select', options: interests, required: true },
                        { name: 'status', label: 'Status', type: 'select', options: statuses, required: true },
                        { name: 'date', label: 'Date', type: 'date', required: true },
                        { name: 'notes', label: 'Notes', type: 'textarea' },
                    ]}
                    initialData={editItem || { name: '', email: '', phone: '', interest: '', status: 'New', date: new Date().toISOString().split('T')[0], notes: '' }}
                    onSave={handleSave}
                    onCancel={() => { setShowForm(false); setEditItem(null); }}
                />
            )}

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Interest</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((l) => (
                        <tr key={l.id}>
                            <td><strong>{l.name}</strong></td>
                            <td>{l.email}</td>
                            <td>{l.interest}</td>
                            <td><span className={`${styles.badge} ${styles[`badge${l.status.replace(/\s/g, '')}`]}`}>{l.status}</span></td>
                            <td>{l.date}</td>
                            <td className={styles.notesCell}>{l.notes}</td>
                            <td className={styles.actions}>
                                <button className={styles.editBtn} onClick={() => { setEditItem(l); setShowForm(true); }}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(l.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {filtered.length === 0 && (
                        <tr><td colSpan={7} className={styles.empty}>No leads found.</td></tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

/* ================================================================
   BUDGET TAB
   ================================================================ */
function BudgetTab({ budget, updateBudget, totalIncome, totalExpense }) {
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['Seeds & Saplings', 'Farm Tools', 'Compost Materials', 'Staff Salary', 'Utilities', 'Workshop Revenue', 'Corporate Sponsorship', 'Individual Donation', 'Farm Sales', 'Other'];
    const filtered = filter === 'All' ? budget : budget.filter((b) => b.type === filter);

    // Sort by date — newest first
    const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

    // Running balance (only meaningful when showing ALL)
    let runBal = 0;
    const ledgerRows = sorted.map((entry) => {
        runBal += entry.type === 'Income' ? entry.amount : -entry.amount;
        return { ...entry, balance: runBal };
    });

    const netBalance = totalIncome - totalExpense;

    const handleSave = (formData) => {
        formData.amount = Number(formData.amount);
        if (editItem) {
            updateBudget(budget.map((b) => (b.id === editItem.id ? { ...formData, id: editItem.id } : b)));
        } else {
            updateBudget([...budget, { ...formData, id: nextId(budget) }]);
        }
        setShowForm(false);
        setEditItem(null);
    };

    const handleDelete = (id) => {
        updateBudget(budget.filter((b) => b.id !== id));
    };

    return (
        <>
            {/* Summary Cards */}
            <div className={styles.budgetSummary}>
                <div className={styles.budgetBox} style={{ borderTopColor: 'var(--moss-mid)' }}>
                    <span>Total Credit (Income)</span>
                    <strong style={{ color: 'var(--moss-deep)' }}>₹{totalIncome.toLocaleString()}</strong>
                </div>
                <div className={styles.budgetBox} style={{ borderTopColor: '#b42828' }}>
                    <span>Total Debit (Expenses)</span>
                    <strong style={{ color: '#8b2020' }}>₹{totalExpense.toLocaleString()}</strong>
                </div>
                <div className={styles.budgetBox} style={{ borderTopColor: netBalance >= 0 ? 'var(--moss-mid)' : '#b42828' }}>
                    <span>Closing Balance</span>
                    <strong style={{ color: netBalance >= 0 ? 'var(--moss-deep)' : '#8b2020' }}>
                        ₹{Math.abs(netBalance).toLocaleString()}
                    </strong>
                </div>
            </div>

            {/* Toolbar */}
            <div className={styles.tabToolbar}>
                <div className={styles.filterGroup}>
                    {['All', 'Income', 'Expense'].map((s) => (
                        <button key={s} className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ''}`} onClick={() => setFilter(s)}>
                            {s}
                        </button>
                    ))}
                </div>
                <button className={`btn btn-moss ${styles.addBtn}`} onClick={() => { setEditItem(null); setShowForm(true); }}>
                    + Add Transaction
                </button>
            </div>

            {showForm && (
                <CrudForm
                    key={editItem ? `edit-budget-${editItem.id}` : 'new-budget'}
                    title={editItem ? 'Edit Transaction' : 'New Transaction'}
                    fields={[
                        { name: 'category', label: 'Particulars / Category', type: 'select', options: categories, required: true },
                        { name: 'type', label: 'Type', type: 'select', options: ['Income', 'Expense'], required: true },
                        { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
                        { name: 'date', label: 'Date', type: 'date', required: true },
                        { name: 'notes', label: 'Narration', type: 'textarea' },
                    ]}
                    initialData={editItem || { category: '', type: 'Expense', amount: '', date: new Date().toISOString().split('T')[0], notes: '' }}
                    onSave={handleSave}
                    onCancel={() => { setShowForm(false); setEditItem(null); }}
                />
            )}

            {/* Ledger Table */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Particulars</th>
                        <th>Narration</th>
                        <th style={{ textAlign: 'right' }}>Debit (₹)</th>
                        <th style={{ textAlign: 'right' }}>Credit (₹)</th>
                        {filter === 'All' && <th style={{ textAlign: 'right' }}>Balance</th>}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Opening Balance Row */}
                    {filter === 'All' && (
                        <tr style={{ background: 'var(--parchment)' }}>
                            <td style={{ fontStyle: 'italic', color: 'var(--soil-light)' }}>—</td>
                            <td colSpan={2}><em style={{ color: 'var(--soil-light)' }}>Opening Balance</em></td>
                            <td></td>
                            <td></td>
                            <td style={{ textAlign: 'right', fontWeight: 600 }}>₹0</td>
                            <td></td>
                        </tr>
                    )}

                    {ledgerRows.map((b) => (
                        <tr key={b.id}>
                            <td style={{ whiteSpace: 'nowrap' }}>{b.date}</td>
                            <td><strong>{b.category}</strong></td>
                            <td className={styles.notesCell}>{b.notes}</td>
                            <td style={{ textAlign: 'right' }} className={styles.expenseAmt}>
                                {b.type === 'Expense' ? `₹${b.amount.toLocaleString()}` : ''}
                            </td>
                            <td style={{ textAlign: 'right' }} className={styles.incomeAmt}>
                                {b.type === 'Income' ? `₹${b.amount.toLocaleString()}` : ''}
                            </td>
                            {filter === 'All' && (
                                <td style={{ textAlign: 'right', fontWeight: 600 }} className={b.balance >= 0 ? styles.incomeAmt : styles.expenseAmt}>
                                    ₹{Math.abs(b.balance).toLocaleString()}
                                </td>
                            )}
                            <td className={styles.actions}>
                                <button className={styles.editBtn} onClick={() => { setEditItem(b); setShowForm(true); }}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(b.id)}>Del</button>
                            </td>
                        </tr>
                    ))}

                    {/* Closing Balance / Totals Row */}
                    <tr style={{ background: 'var(--parchment)', borderTop: '2px solid var(--soil-light)' }}>
                        <td></td>
                        <td colSpan={2}><strong>Totals / Closing</strong></td>
                        <td style={{ textAlign: 'right' }}>
                            <strong className={styles.expenseAmt}>₹{totalExpense.toLocaleString()}</strong>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            <strong className={styles.incomeAmt}>₹{totalIncome.toLocaleString()}</strong>
                        </td>
                        {filter === 'All' && (
                            <td style={{ textAlign: 'right' }}>
                                <strong className={netBalance >= 0 ? styles.incomeAmt : styles.expenseAmt}>
                                    ₹{Math.abs(netBalance).toLocaleString()}
                                </strong>
                            </td>
                        )}
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

/* ================================================================
   REACH TAB
   ================================================================ */
function ReachTab({ reach, updateReach }) {
    const [showForm, setShowForm] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const handleSave = (formData) => {
        formData.value = Number(formData.value);
        if (editItem) {
            updateReach(reach.map((r) => (r.id === editItem.id ? { ...formData, id: editItem.id } : r)));
        } else {
            updateReach([...reach, { ...formData, id: nextId(reach) }]);
        }
        setShowForm(false);
        setEditItem(null);
    };

    const handleDelete = (id) => {
        updateReach(reach.filter((r) => r.id !== id));
    };

    const trendIcon = (t) => t === 'up' ? '📈' : t === 'down' ? '📉' : '➡️';

    return (
        <>
            <div className={styles.tabToolbar}>
                <h2 style={{ margin: 0 }}>Metrics &amp; Analytics</h2>
                <button className={`btn btn-moss ${styles.addBtn}`} onClick={() => { setEditItem(null); setShowForm(true); }}>
                    + Add Metric
                </button>
            </div>

            {showForm && (
                <CrudForm
                    key={editItem ? `edit-reach-${editItem.id}` : 'new-reach'}
                    title={editItem ? 'Edit Metric' : 'New Metric'}
                    fields={[
                        { name: 'metric', label: 'Metric Name', type: 'text', required: true },
                        { name: 'value', label: 'Value', type: 'number', required: true },
                        { name: 'period', label: 'Period', type: 'text', required: true },
                        { name: 'trend', label: 'Trend', type: 'select', options: ['up', 'down', 'stable'], required: true },
                    ]}
                    initialData={editItem || { metric: '', value: '', period: 'Dec 2024', trend: 'stable' }}
                    onSave={handleSave}
                    onCancel={() => { setShowForm(false); setEditItem(null); }}
                />
            )}

            <div className={styles.reachGrid}>
                {reach.map((r) => (
                    <div key={r.id} className={styles.reachCard}>
                        <div className={styles.reachTop}>
                            <span className={styles.reachMetric}>{r.metric}</span>
                            <span className={styles.reachTrend}>{trendIcon(r.trend)}</span>
                        </div>
                        <span className={styles.reachValue}>{r.value.toLocaleString()}</span>
                        <span className={styles.reachPeriod}>{r.period}</span>
                        <div className={styles.reachActions}>
                            <button className={styles.editBtn} onClick={() => { setEditItem(r); setShowForm(true); }}>Edit</button>
                            <button className={styles.deleteBtn} onClick={() => handleDelete(r.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

function CrudForm({ title, fields, initialData, onSave, onCancel }) {
    // Build a clean initial state from fields only (strip computed properties)
    const buildClean = (data) => {
        const clean = {};
        fields.forEach((f) => { clean[f.name] = data[f.name] ?? ''; });
        return clean;
    };

    const [form, setForm] = useState(() => buildClean(initialData));
    const [error, setError] = useState('');

    const handleChange = (name, value) => {
        setForm((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate required fields manually
        for (const f of fields) {
            if (f.required && (!form[f.name] || form[f.name] === '')) {
                setError(`Please fill in the "${f.label}" field.`);
                return;
            }
        }
        // Only pass known fields to onSave
        const cleanData = {};
        fields.forEach((f) => { cleanData[f.name] = form[f.name]; });
        onSave(cleanData);
    };

    return (
        <div className={styles.formOverlay}>
            <form onSubmit={handleSubmit} className={styles.crudForm}>
                <h3>{title}</h3>
                {error && (
                    <div style={{
                        background: 'rgba(180,40,40,0.1)',
                        border: '1px solid rgba(180,40,40,0.3)',
                        color: '#8b2020',
                        padding: '0.5rem 0.8rem',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-dm-mono)',
                        fontSize: '0.75rem',
                        marginBottom: '0.8rem',
                    }}>{error}</div>
                )}
                <div className={styles.formGrid}>
                    {fields.map((f) => (
                        <div key={f.name} className={styles.formField}>
                            <label>{f.label}{f.required ? ' *' : ''}</label>
                            {f.type === 'select' ? (
                                <select value={form[f.name]} onChange={(e) => handleChange(f.name, e.target.value)}>
                                    <option value="">Select…</option>
                                    {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                                </select>
                            ) : f.type === 'textarea' ? (
                                <textarea value={form[f.name]} onChange={(e) => handleChange(f.name, e.target.value)} rows={3} />
                            ) : (
                                <input type={f.type} value={form[f.name]} onChange={(e) => handleChange(f.name, e.target.value)} />
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.formActions}>
                    <button type="button" className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-moss">Save</button>
                </div>
            </form>
        </div>
    );
}
