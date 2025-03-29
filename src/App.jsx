import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost/CreatePost";
import logo from "./assets/accdev-logo.png";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-list">
          <Link className="nav-item" to={"/"}>
            Home
          </Link>
          <Link className="nav-item" to={"./Login"}>
            Log In
          </Link>
          <Link className="nav-item" to={"/CreatePost"}>
            Create Post
          </Link>
        </div>
      </nav>

      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </div>
      <footer><p>AccDev  &copy; <span id="year">2025</span> . All rights reserved.</p></footer>
    </Router>
  );
}

export default App;
