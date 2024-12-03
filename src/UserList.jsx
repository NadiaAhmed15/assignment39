import React, { useState } from "react";
import "./App.css";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Sherfa", age: 52 },
    { id: 2, name: "Mohammed", age: 60 },
    { id: 3, name: "Fawzi", age: 70 },
    { id: 4, name: "Zakiya", age: 52 },
    { id: 5, name: "Nadia", age: 20 },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleSaveClick = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editingUser.id ? { ...user, ...editingUser } : user
      )
    );
    setEditingUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {editingUser?.id === user.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleChange}
                  className="user-input"
                />
                <input
                  type="number"
                  name="age"
                  value={editingUser.age}
                  onChange={handleChange}
                  className="user-input"
                />
                <button onClick={handleSaveClick} className="save-btn">
                  Save
                </button>
              </>
            ) : (
              <>
                {user.name} (Age: {user.age})
                <button
                  onClick={() => handleEditClick(user)}
                  className="edit-btn"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
