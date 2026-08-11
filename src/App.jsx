import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <HashRouter>
      {/* Navigation bar shown on all pages */}
      <Navbar />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;