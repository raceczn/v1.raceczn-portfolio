import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { slideDown, navParentVariants } from '../src/utils/animationVariants';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState('');

  const [lastScroll, setLastScroll] = useState(0);
  const [scrollState, setScrollState] = useState('');

  const navbarItems = ['#Home', '#About', '#Projects', '#Contact'];

  useEffect(() => {
    const darkMode = localStorage.getItem('darkmode');
    darkMode === 'dark' ? enableDarkMode() : disableDarkMode();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        setScrollState('scroll-down');
      }

      if (currentScroll < lastScroll) {
        setScrollState('scroll-up');
      }

      if (currentScroll <= 0) {
        setScrollState('');
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  const enableDarkMode = () => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('darkmode', 'dark');
    setIsDark('dark');
  };

  const disableDarkMode = () => {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('darkmode', 'light');
    setIsDark('light');
  };

  const toggleDarkMode = () => {
    if (isDark === 'dark') {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <header className={`navbar ${scrollState}`}>
      <motion.div
        className="navbar__container"
        variants={navParentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="navbar__name" variants={slideDown}>
          <a href="/" className="navbar__link">@raceczn.</a>
        </motion.div>
        <nav className="navbar__nav">
          <ul className="navbar__nav-list">
            {navbarItems.map((item) => (
              <motion.li className="navbar__item" variants={slideDown} key={item}>
                <a href={item} className="navbar__link">
                  {item.substring(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="navbar__toggle"
          onClick={toggleDarkMode}
          variants={slideDown}
        >
          {isDark === 'dark' ? <RiSunLine /> : <RiMoonClearLine />}
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Navbar;
