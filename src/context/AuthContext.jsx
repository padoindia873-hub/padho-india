import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.dta.user))
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const res = await API.post("/user/login", credentials);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      toast.success("Login Successful");
      navigate(res.data.user.userType === "ADMIN" ? "/admin" : "/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

