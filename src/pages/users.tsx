import { useState } from "react";
import styles from "../styles/Users.module.css";
import { GetStaticProps } from "next";

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
  ];

  return {
    props: {
      initialUsers: users,
    },
  };
};

export default function UsersPage({ initialUsers }: UsersPageProps) {
  const [users] = useState<User[]>(initialUsers);

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
