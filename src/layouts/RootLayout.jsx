import React, {useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import styles from './RootLayout.module.css';
import Footer from '../blog pages/footer/Footer';

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //  toggle Menu

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  }

  // Close menu

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  //   get Nav links class

  function getNavLinks({isActive}) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  }

  //   close menu
  function handleLinkClick() {
    closeMenu();
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Blog</h1>
          {/* Hamburger Menu */}

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={getNavLinks}
              onClick={handleLinkClick}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={getNavLinks}
              onClick={handleLinkClick}
              end
            >
              About
            </NavLink>
            <NavLink
              to="/blogpost"
              className={getNavLinks}
              onClick={handleLinkClick}
              end
            >
              Blog Post
            </NavLink>
            <NavLink
              to="/bloglist"
              className={getNavLinks}
              onClick={handleLinkClick}
              end
            >
              Blog List
            </NavLink>
            <NavLink
              to="/contact"
              className={getNavLinks}
              onClick={handleLinkClick}
              end
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
        />
      )}
      <main className={styles.menu}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
