import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";
import OrderStatus from "./component/orderstatus";
import ChatUI from "./component/chatUI";

import "./App.css";
import { chatContext } from "./component/context";
import { useState } from "react";

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

// create uer function
const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;

//* User Registration

// const name = "Brand";
// const role = "1"
// var user = new CometChat.User(uid,role)
// user.setName(name);
// user.setRole(role);

// CometChat.createUser(user, authKey).then(
//   user => {
//     console.log("user created",user);
//   },error =>{
//     console.log("error creating user",error);
//   }
// )

//* login user functions
// let uid = "inf7001"
// CometChat.login(uid, authKey).then(
//   (user) => {
//     console.log("User logged in Successfully", { user });
//   },
//   (error) => {
//     console.log("login failed ", { error });
//   }
// );

function App() {
  const [currentOrder, setCurrentOrder] = useState({});
  return (
    <div className="">
      <chatContext.Provider value={{ currentOrder, setCurrentOrder }}>
        {/* influencer */}
        <ChatUI/>
        {/*Brand */}

      </chatContext.Provider>
    </div>
  );
}

export default App;
