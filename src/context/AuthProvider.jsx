/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create a context for authentication data
export const AuthContext = createContext({});

// AuthProvider component
// This component provides authentication data to its children
export function AuthProvider({ children }) {
  const [language, setLanguage] = useState("IT");
  // State for the user data
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );
  // State for the CSRF token
  const [csrfToken, setCsrfToken] = useState(
    sessionStorage.getItem("csrfToken") || ""
  );
  // State for the last activity time
  const [lastActivity, setLastActivity] = useState(Date.now());
  // useNavigate hook for navigation
  const navigate = useNavigate();

  // Ref for the logout timeout
  const logoutTimeoutRef = useRef();

  // Function to logout the user
  const logout = async () => {
    try {
      // Send a POST request to the /logout endpoint
      const response = await axios.post(
        "/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      );
      // If the response is successful, clear the session storage and state
      if (response.status === 200) {
        sessionStorage.clear();
        setCsrfToken("");
        setUser(null);
        // Navigate to the home page
      } else if (response.status === 401) {
        // If the response status is 401 (Unauthorized), clear the session storage and state
        sessionStorage.clear();
        setCsrfToken("");
        setUser(null);
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (user) {
          await axios.get("/check-auth", {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          });
        }
      } catch (error) {
        console.error(error);
        // Clear the user data and CSRF token from the state and sessionStorage
        setUser(null);
        setCsrfToken("");
        sessionStorage.clear();
        navigate("/login", { replace: true });
      }
    };

    checkAuth();
  }, []);

  // Effect to save the user data to the session storage when it changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Effect to save the CSRF token to the session storage when it changes
  useEffect(() => {
    if (csrfToken) {
      sessionStorage.setItem("csrfToken", csrfToken);
    }
  }, [csrfToken]);

  // Effect to logout the user after 1 hour of inactivity
  useEffect(() => {
    if (user) {
      clearTimeout(logoutTimeoutRef.current);
      logoutTimeoutRef.current = setTimeout(() => {
        logout();
      }, 60 * 60 * 1000); // 1 hour
    }

    // Clear the timeout when the component unmounts
    return () => clearTimeout(logoutTimeoutRef.current);
  }, [lastActivity, user]);

  // Effect to update the last activity time when the user moves the mouse or presses a key
  useEffect(() => {
    if (user) {
      let lastUpdateTime = Date.now();

      const handleActivity = () => {
        const now = Date.now();
        const timeSinceLastUpdate = now - lastUpdateTime;

        // Update the last activity time only if at least 10 minute has passed
        if (timeSinceLastUpdate > 600000) {
          setLastActivity(now);
          lastUpdateTime = now;
        }
      };

      window.addEventListener("mousemove", handleActivity);
      window.addEventListener("keydown", handleActivity);

      // Remove the event listeners when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleActivity);
        window.removeEventListener("keydown", handleActivity);

        // Remove the event listeners when the component unmounts
        return () => {
          window.removeEventListener("mousemove", handleActivity);
          window.removeEventListener("keydown", handleActivity);
        };
      };
    }
  }, [user]);

  // Return the AuthContext.Provider component
  // This component provides the authentication data to its children
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        csrfToken,
        setCsrfToken,
        logout,
        language,
        setLanguage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
