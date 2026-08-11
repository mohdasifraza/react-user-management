import { Link } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <div className="card-buttons">
        {/* <Link to={`/users/${user.id}`} className="btn view-btn">
          View
        </Link> */}

        <Link to={`/user/${user.id}`} className="btn view-btn">
  View
</Link>

        <Link to={`/edit-user/${user.id}`} className="btn edit-btn">
          Edit
        </Link>

        {/* <Link to={`/users/${user.id}`}>Edit</Link> */}

        <button
          className="btn delete-btn"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;