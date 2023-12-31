import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={LoginPage} />
          <Route path="/register" element={RegisterPage} />
          <Route element={ProtectedRoutes}>
            <Route path="/tasks" element={TasksPage} />
            <Route path="/add-task" element={TaskFormPage} />
            <Route path="/task/:id" element={TaskFormPage} />
            <Route path="/profile" element={ProfilePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
