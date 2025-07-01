import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Clean up');
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Home' title='Home'>
        <HouseIcon size={64} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='History'
        title='History'
      >
        <HistoryIcon size={64} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon size={64} />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Change theme'
        title='Change theme'
        onClick={handleThemeChange}
      >
        <SunIcon size={64} />
      </a>
    </nav>
  );
}
