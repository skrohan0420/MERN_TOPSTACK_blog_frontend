// utils/auth.js
export const isAuthenticated = () => {
    return !!localStorage.getItem("token"); // Or any logic you use for auth
  };
  