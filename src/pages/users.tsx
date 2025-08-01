import { useState, useEffect } from "react";
import styles from "../styles/Users.module.css";
import { GetStaticProps } from "next";
import Head from "next/head";

type User = {
  id: number;
  name: string;
  email: string;
};

interface UsersPageProps {
  initialUsers: User[];
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  // The data you have in your API route can be directly used here
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    { id: 4, name: "Giorgio Puzzini", email: "giorgio@example.com" },
  ];

  return {
    props: {
      initialUsers: users,
    },
  };
};

export default function UsersPage({ initialUsers }: UsersPageProps) {
  const [users] = useState<User[]>(initialUsers);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Update window width on client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <h1>Users</h1>
        <div className={styles.debugInfo}>
          <p>Window width: {windowWidth}px</p>
          <p>This content will overflow on mobile devices</p>
        </div>
        <div className={styles.userList}>
          {users.map((user) => (
            <div
              key={user.id}
              data-testid={"user" + user.id}
              className={styles.userItem}
            >
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
