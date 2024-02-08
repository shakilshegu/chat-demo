import { CometChat } from "@cometchat-pro/chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ChatUI from "./component/chatUI";
import { chatContext } from "./component/context";
import './index.css';


const appID = process.env.REACT_APP_COMETCHAT_APP_ID;
const region = process.env.REACT_APP_COMETCHAT_REGION;

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization complete successfully");
  },
  (error) => {
    console.log("Initialization Failed", error);
  }
);

function App() {
  const [currentOrder, setCurrentOrder] = useState({});

  return (
    <Router>
    <Routes>
      <Route path='/influencer' element={
        <chatContext.Provider value={{ currentOrder, setCurrentOrder }}>
          <ChatUI/>
        </chatContext.Provider>
      } />
    </Routes>
  </Router>
  );
}

export default App;
