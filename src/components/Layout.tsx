import { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Buildo Next.js App</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2025 Buildo Next.js App</p>
      </footer>
    </div>
  );
}
