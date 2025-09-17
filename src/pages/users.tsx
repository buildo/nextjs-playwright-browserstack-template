import styles from "../styles/Users.module.css";

export default function UsersPage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    { id: 4, name: "Giorgio Puzzini", email: "giorgio@example.com" },
  ];
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className={styles.debugInfo}>
        <p>
          Below 500px viewport, this content will <strong>overflow</strong>.
        </p>
      </div>

      <div className={styles.userList}>
        {users.map((user) => (
          <div
            key={user.id}
            className={styles.userItem}
            data-testid={`user-${user.id}`}
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
