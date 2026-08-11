import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import { getUsers, deleteUser } from "../services/api";

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Unable to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );
    } catch (err) {
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home-container">

      <div className="home-header">
        <div>
          <h1>User Management</h1>
          <p>Manage all your users in one place</p>
        </div>

        <button
          className="add-user-btn"
          onClick={() => navigate("/add-user")}
        >
          + Add User
        </button>
      </div>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <div className="users-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;