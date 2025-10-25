import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const AuthContext = createContext();

const fetchProfile = async () => {
  try {
    const result = await api.get("/user/get-users")
    return result.data || null;
  } catch (err) {
    return err.response?.status === 401 ? null : Promise.reject(err);
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { data, isFetching, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchProfile,
    staleTime: 5 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
 

  useEffect(() => {
    if (data !== undefined) {
      setUser(data);
      if (data) localStorage.setItem("user", JSON.stringify(data));
      else localStorage.removeItem("user");
    }
  }, [data]);

  const value = { user, setUser, isFetching, isError };
 
  if (isFetching && !user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="h-10 w-10 border-y-2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
