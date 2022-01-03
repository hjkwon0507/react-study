import styles from './Layout.module.css';
import Header from './Header.js';
import Menu from './Menu.js';
import { useState } from 'react';

function Layout({ children, activeMenu }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Header menu={menu} setMenu={setMenu} />
      <div className={styles.layout}>
        {
          menu === true
          ? <Menu />
          : null
        }
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;