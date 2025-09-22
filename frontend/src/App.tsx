import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ItemsPage from "./pages/ItemsPage";
import useAuthUser from "./hooks/useAuth";
import PageLoading from "./pages/PageLoader";

function App() {
  interface AuthUser {
    name: string;
    email: string;
    isAdmin: boolean;
  }
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  if (isLoading) return <PageLoading />;
  console.log(isAuthenticated);
  console.log(authUser);
  return (
    <div data-theme="cupcake">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            !isAuthenticated ? <SignupPage /> : <Navigate to="/sweets" />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/sweets" />}
        />
        <Route
          path="/sweets"
          element={
            isAuthenticated ? (
              <ItemsPage user={authUser as AuthUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
