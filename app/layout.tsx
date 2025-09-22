import { ReactNode } from "react";
import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Buildo Next.js App</h1>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <p>© 2025 Buildo Next.js App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
