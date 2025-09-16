import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loader from "../../components/Loader";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState({});
  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return setIsLoading(false);
    // console.log(token);
    await axios
      .get("/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsAuth(true);
        setUser(res.data.user);
        setSession(res.data.session);
        // console.log("res.data ", res.data);
        // console.log("session: ", res.data.session);
      })
      .catch((error) => {
        console.error("Invalid token", error);
        setIsAuth(false);
        setIsLoading(false);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
    setUser(null);
  };
  useEffect(() => {
    fetchProfile();
    if (session?.exp && session.exp <= Date.now()) {
      handleLogout();
    }
  }, [fetchProfile]);

  if (isLoading) return <Loader />;
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, user, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
