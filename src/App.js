import { CometChat } from "@cometchat-pro/chat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import ChatRoute from "./Rotes/chatRoute";

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
  return (
    <Router> {/* Wrap your entire application with Router */}
      <Routes>
        <Route path='/*' element={<ChatRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
