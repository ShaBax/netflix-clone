import NavBar from "./components/nav-bar";
import HomePage from "./pages/home-page";
import { useInitailApiCall } from "./hooks/use-initial-api-call";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyListPage from "./pages/my-list-page";
function App() {
  useInitailApiCall();
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/my-list" element={<MyListPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
