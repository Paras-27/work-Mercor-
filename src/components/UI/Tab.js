import styles from "./Tab.module.css"

export default function Tab({children}) {
  return (
    <div className={styles.tab}>{children}</div>
  )
}
