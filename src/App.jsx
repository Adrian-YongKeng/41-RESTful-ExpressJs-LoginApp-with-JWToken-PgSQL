import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./AuthContext";
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import RequireAuth from './RequireAuth';

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
