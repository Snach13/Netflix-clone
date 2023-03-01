import {
  Routes,
  Router,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}

        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
