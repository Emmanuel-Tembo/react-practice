import Avatar from "./components/Avatar"
import DynamicAvatar from "./components/DynamicAvatar"
import Dateformat from "./components/Dateformat.jsx"
import Screen from "./components/sidebar.jsx"

export default function Greeting(){
    return(
      <>
        <Dateformat />
        <Avatar />
        <DynamicAvatar/>
        <h1>Hello</h1>
        <Screen />
      </>
      
    )
} 

