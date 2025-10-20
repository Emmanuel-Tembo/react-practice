import { Header } from "./components/travelHeader.jsx";
import './App.css'
import './components/header.css'
import { PostLayout } from "./components/post.jsx";

export default function AppLayout(){
   return (
      <div>
         <Header />
         <PostLayout/>
      </div>
   )
} 

