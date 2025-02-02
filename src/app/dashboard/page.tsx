'use client';
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import styles from '../dashboard.module.css';
// import { useAuth } from '../../../hooks/useAuth';


const Dashboard: React.FC = () => {
  // useAuth(); // Protect this page by checking the auth status
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

  // const handleSelection = (selection: string) => {
  //   if (selection === 'company') {
  //     router.push('/company-dashboard'); // Replace with the actual company URL
  //   } else if (selection === 'individual') {
  //     router.push('/individual-dashboard'); // Replace with the actual individual URL
  //   }
  // };

  const handleSelection = (selection: string) => {
    localStorage.setItem('dashboardType', selection);
    setShowModal(false);
    if (selection === 'company') router.push('/company-dashboard');
    else if (selection === 'individual') router.push('/individual-dashboard');
  };

  React.useEffect(() => {
    const dashboardType = localStorage.getItem('dashboardType');
    if (dashboardType) {
      setShowModal(false);
      router.push(`/${dashboardType}-dashboard`);
    }
  }, []);


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-gray-900">
        <div className="text-2xl font-bold">TESTFIRE</div>
        <ul className="flex space-x-8">
          <li className="hover:text-gray-400 cursor-pointer">Blog</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Docs</li>
        </ul>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center space-y-6">
            <h2 className="text-2xl font-bold">Choose Your Dashboard</h2>
            <p className="text-gray-400">
              Select whether you're managing a company or an individual account.
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => handleSelection('company')}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Company
              </button>
              <button
                onClick={() => handleSelection('individual')}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Individual
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      {!showModal && (
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className="text-4xl font-bold mb-8">Welcome to the Admin Dashboard</h1>
            <div className={styles.grid}>
              <a href="#" className={styles.card}>
                <h3>Users &rarr;</h3>
                <p>Manage users and their permissions.</p>
              </a>
              <a href="#" className={styles.card}>
                <h3>Settings &rarr;</h3>
                <p>Configure application settings.</p>
              </a>
              <a href="#" className={styles.card}>
                <h3>Reports &rarr;</h3>
                <p>View and generate reports.</p>
              </a>
              <a href="#" className={styles.card}>
                <h3>Logs &rarr;</h3>
                <p>View system logs and activities.</p>
              </a>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
