import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ExploreMentors from "./pages/ExploreMentors";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<ExploreMentors />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="main" element={<Main/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="messages" element={<Messages/>} />
          <Route path="notification" element={<Notification/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
