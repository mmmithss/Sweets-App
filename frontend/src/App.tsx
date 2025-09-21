import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/register" element=<SignupPage /> />
        <Route path="/login" element=<LoginPage /> />
        <Route path="/sweets" element=<ItemsPage /> />
      </Routes>
    </div>
  );
}

export default App;
