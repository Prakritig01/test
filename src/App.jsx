import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { posts } from "./data/feedData";
import Card from "./component/Card";

function App() {
  const [feedData, setFeedData] = useState(posts);

  const handleLike = (id) => {
    const post = feedData.find((post) => post.id === id);

    if (post) {
      post.isLike = !post.isLike;
      setFeedData([...feedData]);
    }
  };

  const addComment = (id,comment) => {
    const post = feedData.find((post) => post.id === id);

    if (post) {
      post.comment.push(comment);
      setFeedData([...feedData]);
    }
  }

  // console.log("feedData", feedData);

  return (
    <div className="container flex flex-col  items-center justify-center mx-auto min-h-screen bg-gray-100">
      <div className="add-post-button">ADD POST</div>
      <div className="posts flex flex-wrap justify-center">
        {feedData.map((post, index) => (
          <Card cardInfo={post} key={index} handleLike={handleLike}  addComment= {addComment}/>
        ))}
      </div>
    </div>
  );
}

export default App;
