import { CometChat } from "@cometchat-pro/chat"
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components"

const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID,appSetting).then(
  ()=>{
    console.log("Initilization complete successfuly");
  },
  error => {
    console.log("Initilization faild",error);
  }
)

// create uer function

const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY

const uid = "user2"
// const name = "rizwan";

// var user = new CometChat.User(uid)
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//   user => {
//     console.log("user created",user);
//   },error =>{
//     console.log("error creating user",error);
//   }
// )

//* login user functions

CometChat.login(uid,authKey).then(
  user => {
    console.log("User logged in Successfully",{user});
  },
  error => {
    console.log("login failed ",{error});
  }
)
 
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '700px', margin: 'auto' }}>
    <CometChatUI/>
    </div>
  );
}

export default App;
