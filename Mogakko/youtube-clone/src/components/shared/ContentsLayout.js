import styles from './ContentsLayout.module.css';

function ContentsLayout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.contatiner}>{children}</div>
    </div>
  )
}

export default ContentsLayout;