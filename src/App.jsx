import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { AuthProvider } from "./components/Context";
import { PortectedRoute } from "./components/PortectedRoute";

import "./App.css";
import { Error } from "./components/Error";

function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="contact"
              element={
                <PortectedRoute>
                  <Contact />
                </PortectedRoute>
              }
            />
            <Route
              path="about"
              element={
                <PortectedRoute>
                  <About />
                </PortectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PortectedRoute>
                  <Profile />
                </PortectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
