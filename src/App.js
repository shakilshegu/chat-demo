import { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatUI from "./component/chatUI";
import { chatContext } from "./component/context";
import Influencer from "./component/Influencer";
import Brand from "./component/Brand";



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
      <Route path="/" element={<Influencer/>}/>
      <Route path="/brand" element={<Brand/>}/>

      {/* <Route path="/influencer" element={
        <chatContext.Provider value={{ currentOrder, setCurrentOrder }}>
          <ChatUI/>
        </chatContext.Provider>
      } /> */}
    </Routes>
  </Router>
  );
}

export default App;
