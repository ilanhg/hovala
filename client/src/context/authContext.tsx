import  {
  createContext,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let isLoggedIn: boolean;
export const AuthContext = createContext({ isLoggedIn: false });

const UseAuth: any = function ({ children }: any) {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    isLoggedIn = false;
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    navigate("/login");
  }, [isLoggedIn]);
  useLayoutEffect(() => {
    const requestsInterceptor = axios.create().interceptors.request.use(
      (req) => {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken) {
          req.headers.Authorization = `Bearer ${accessToken}`;
        }
        return req;
      },
      (error: Error) => error
    );

    const responsesInterceptor = axios.create().interceptors.response.use(
      (res) => res,
      async (error: Error & { response: any }) => {
        if (error?.response?.status === 401) {
          const refreshToken = window.localStorage.getItem("refreshToken");
          if (refreshToken) {
            const response = await axios
              .create()
              .post("http://localhost:4000/token", { refreshToken });
            const accessToken = response?.data?.accessToken;
            if (accessToken) {
              window.localStorage.setItem("accessToken", accessToken);
            } else {
              logout();
            }
          } else {
            console.log(error);
            logout();
          }
        }
        alert(`Error from server, status: ${error?.response?.status}`);
      }
    );

    return () => {
      axios.create().interceptors.request.eject(requestsInterceptor);
      axios.create().interceptors.response.eject(responsesInterceptor);
    };
  }, [isLoggedIn]);
  return <>{children}</>;
};

const AuthProvider = ({ children }: any) => {
  function checkToken() {
    const isAccessToken = window.localStorage.getItem("accessToken");
    return isAccessToken ? true : false;
  }

  const [loggedIn, setLoggedIn] = useState(checkToken());
  
  return (
    <AuthContext.Provider value={{ isLoggedIn:loggedIn }}>
      <UseAuth loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      {children}
      </UseAuth>
    </AuthContext.Provider>
  );
};


export default AuthProvider;
