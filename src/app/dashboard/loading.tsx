import React from 'react';
import styles from '@/app/dashboard.module.css';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${styles.title} bg-gray-300 animate-pulse h-10 w-3/4 mb-6`}></h1>
        <div className={styles.grid}>
          <div className={`${styles.card} bg-gray-300 animate-pulse h-24 w-full mb-4`}></div>
          <div className={`${styles.card} bg-gray-300 animate-pulse h-24 w-full mb-4`}></div>
          <div className={`${styles.card} bg-gray-300 animate-pulse h-24 w-full mb-4`}></div>
          <div className={`${styles.card} bg-gray-300 animate-pulse h-24 w-full mb-4`}></div>
        </div>
      </main>
    </div>
  );
};

export default LoadingSkeleton;