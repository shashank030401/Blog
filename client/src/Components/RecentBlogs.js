import React, { useEffect, useState } from "react";
import "../Styles/admin.css"
import axios from "../axios";

function RecentBlogs() {

    const [posts, setPosts] = useState([]);
  const getRecentPosts = async () => {
    const responseData = await axios
      .get("/AllBlogs/RecentPosts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRecentPosts();
  }, []);
  return (
    <div className="post-holder">
      {posts.map((post) => (
        <div>
          <div className="postCard">
            <div className="postCard-body">
              <div className="date">
                <p>{post.Date}</p>
              </div>
              <div className="postTitle">
                <p>{post.postTitle}</p>
              </div>
              <div className="postBody">
                <textarea readOnly>
                  {post.postContent.slice(0, 200) + "..."}
                </textarea>
              </div>
              <div className="postBody-footer">
                <div className="postBody-tags">
                  {post.tags.map((tag) => (
                    <div className="postBody-tag">
                      <p>{tag.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="postCard-image">
              <img src={post.photoURL} alt="" />
            </div>
          </div>
          <div className="separate"></div>
        </div>
      ))}
    </div>
  );
}

export default RecentBlogs;
