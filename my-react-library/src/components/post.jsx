import { MdLocationOn } from "react-icons/md";
import "./post.css";
import { postData } from "../data/postData.js";

function Post (props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "900px",
        margin: "50px auto 0 auto",
        alignItems: "center",
      }}
    >
      <img className="post-img" src={props.img.src} alt={props.img.alt} />
      <article>
      <div style={{ marginLeft: "30px" }}>
        <MdLocationOn className="icon" />
        <span>{props.country}</span>
        <span>
          <a
            target="blank"
            href={props.googleMapsLink}
          >
            Visit on google maps
          </a>
        </span>
        <h1>{props.title}</h1>
        <h2>{props.dates}</h2>
        <p>
          {props.text}
        </p>
      </div>
    </article>
    </div>
  );
}

export function PostLayout() {
  const travelData = postData.map((post) => {
  return (
    <Post 
      key={post.id}
      {...post}
    />
  )
})

  return (
    <div>
      {travelData}
    </div>
  )
}
