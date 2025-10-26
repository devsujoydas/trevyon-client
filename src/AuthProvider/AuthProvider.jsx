import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  /** ------------------------
   * 🧠 Fetch User Profile (API call)
   * ------------------------ */
  const fetchProfile = useCallback(async () => {
    if (!user?.email) return null; // skip if no user email
    const { data } = await api.get("/user", { params: { email: user.email } });
    return data;
  }, [user?.email]);

  /** ------------------------
   * 🔁 Query Hook (auto cache + refetch)
   * ------------------------ */
  const {
    data: profile,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: fetchProfile,
    enabled: !!user?.email, // only fetch if logged in
    staleTime: 1000 * 60 * 5, // 5 min caching
    refetchOnWindowFocus: false,
  });

  /** ------------------------
   * 💾 Sync profile data with localStorage
   * ------------------------ */
  useEffect(() => {
    if (profile) {
      setUser(profile);
      localStorage.setItem("user", JSON.stringify(profile));
    } else if (profile === null) {
      setUser(null);
      localStorage.removeItem("user");
    }
  }, [profile]);

  /** ------------------------
   * 🚪 Login, Logout Handlers
   * ------------------------ */
  const login = async (credentials) => {
    const { data } = await api.post("/login", credentials);
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    queryClient.invalidateQueries(["user"]);
  };

  const logout = () => {
    api.post("/auth/logout")
    .then(res=>{
      console.log(res.data)
    })
    setUser(null);
    localStorage.removeItem("user");
    queryClient.removeQueries(["user"]);
  };

  console.log(user)

  const value = {
    user,
    setUser,
    isLoading,
    isFetching,
    isError,
    refetchUser: refetch,
    login,
    logout,
  };

  /** ------------------------
   * 🌀 Loader (initial loading state)
   * ------------------------ */
  if (isLoading && !user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="h-10 w-10 border-4 border-gray-400 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export default AuthProvider
/** Custom Hook */
export const useAuth = () => useContext(AuthContext);
