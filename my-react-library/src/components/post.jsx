import { MdLocationOn } from "react-icons/md";
import mountainImge from "../assets/mount-fuji.jpg"
import "./post.css"
function PostImage () {
    return (
        <img className="post-img" src={mountainImge} alt="fiji" />
    )
}

function PostHeader () {
    return (
        <div style={{marginLeft: "30px"}}>
            <MdLocationOn 
                className="icon"
            />
            <span>JAPAN</span>
            <span><a target="blank" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">Visit on google maps</a></span>
            <h1>Mount Fuji</h1>
            <h2>12 Jan, 2021 - 24 Jan, 2021</h2>
            <PostContent />
        </div>
    )
}

function PostContent() {
    return (
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
    )
}

export function PostLayout () {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center", 
            width: "900px",
            margin: "50px auto 0 auto",
            alignItems: "center"}}>
            <PostImage />
            <PostHeader />
        </div>
    )
}