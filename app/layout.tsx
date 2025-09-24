import "./globals.css"
import { ReactNode } from "react";

export const metadata = {
  title: 'Buildo Template App',
  description: 'Minimal Next.js example',
}

export default function Layout({ children }: { children: ReactNode }) {
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
    </html>)
}
