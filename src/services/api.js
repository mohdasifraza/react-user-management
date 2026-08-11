const API_URL = "https://jsonplaceholder.typicode.com/users";
const LOCAL_USERS_KEY = "createdUsers";

// Get all users
export const getUsers = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  // Add locally created users to the API users
  const localUsers =
    JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];

  return [...users, ...localUsers];
};

// Get single user
export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.ok) {
    return await response.json();
  }

  const localUsers =
    JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];

  const user = localUsers.find((user) => user.id === Number(id));

  if (!user) {
    throw new Error("Failed to fetch user");
  }

  return user;
};

// Create user
export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  const newUser = await response.json();

  // Give locally created user a unique ID
  const localUsers =
    JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];

  newUser.id = Date.now();

  localUsers.push(newUser);

  localStorage.setItem(
    LOCAL_USERS_KEY,
    JSON.stringify(localUsers)
  );

  return newUser;
};

// Update user
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const updatedUser = await response.json();

  // Update locally created user if it exists
  const localUsers =
    JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];

  const updatedLocalUsers = localUsers.map((item) =>
    item.id === Number(id)
      ? { ...item, ...user, id: Number(id) }
      : item
  );

  localStorage.setItem(
    LOCAL_USERS_KEY,
    JSON.stringify(updatedLocalUsers)
  );

  return updatedUser;
};

// Delete user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  // Remove locally created user
  const localUsers =
    JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || [];

  const remainingUsers = localUsers.filter(
    (user) => user.id !== Number(id)
  );

  localStorage.setItem(
    LOCAL_USERS_KEY,
    JSON.stringify(remainingUsers)
  );

  return true;
};