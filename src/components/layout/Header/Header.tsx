import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link
          to="/add"
          className={`${pathname === '/' ? styles.active : ''} ${styles.add}`}
        >
          Add Task
        </Link>
      </nav>
    </header>
  );
};

export default Header;
