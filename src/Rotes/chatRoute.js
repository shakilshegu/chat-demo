import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router

import ChatUI from "../component/chatUI";
import { chatContext } from "../component/context";

const ChatRoute = () =>{
  const [currentOrder, setCurrentOrder] = useState({});
  return (
    <Router> {/* Use Router instead of BrowserRouter */}
      <chatContext.Provider value={{ currentOrder, setCurrentOrder }}>
        <Routes>
          <Route path="/influencer" element={<ChatUI/>} />
          <Route path="/brand" />
        </Routes>
      </chatContext.Provider>
    </Router>
  );
}

export default ChatRoute;
