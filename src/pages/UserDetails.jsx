import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../services/api";
import Loader from "../components/Loader";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // Fetch user details when the details page loads
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getUserById(id);
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);


  // Show loading state while fetching user data
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!user) {
    return <p className="error-message">User not found.</p>;
  }

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <div className="details-card">
        <h2>{user.name}</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        {user.website && (
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        )}

        <Link to="/" className="btn">
          Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;