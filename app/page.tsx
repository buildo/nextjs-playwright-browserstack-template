import styles from "./home.module.css"
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.description}>Simple homepage description</p>
      <Link href="/users" className={styles.button}>
        <span>Go to Users</span>
      </Link>
    </div>
  )
}
