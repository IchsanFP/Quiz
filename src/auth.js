const USERS_KEY = "users";

// Ambil data pengguna dari localStorage
export const getUsers = () => {
  const storedUsers = localStorage.getItem(USERS_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

// Simpan pengguna baru ke localStorage
export const registerUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Verifikasi login pengguna
export const loginUser = (email, password) => {
  const users = getUsers();
  return users.find((user) => user.email === email && user.password === password);
};
