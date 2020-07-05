import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import styles from './light-mode.btn.module.scss'

const LightModeBtn = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className={styles.lightModeBtn}>
        <p className={styles.hint}>
          try {theme === 'light' ? 'dark' : 'light'} mode!
        </p>
        <label className={styles.toggler}>
          <div
            className={styles.bg + ' ' + (theme === 'dark' ? styles.dark : '')}
          ></div>
          <input
            className="fully-hidden"
            aria-hidden="true"
            type="checkbox"
            checked={theme === 'dark'}
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          />
        </label>
      </div>
    )}
  </ThemeToggler>
)

export default LightModeBtn
