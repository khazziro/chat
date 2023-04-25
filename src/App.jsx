import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  // Log the current user for debugging purposes
  // console.log(currentUser);

  return (
    // Use BrowserRouter for routing
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* Set Home as the default route */}
          <Route index element={<Home />} />

          {/* Allow unauthenticated users to access login and register pages */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
