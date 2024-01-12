import debug from "debug";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

const log = debug("mern:pages:App");
localStorage.debug = "mern:*";

function App() {
  const [user, setUser] = useState("simon");
  log("user %o", user);

  if (user === null) {
    return (
      <>
        <h1>MERN</h1>
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
