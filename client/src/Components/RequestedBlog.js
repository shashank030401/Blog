import React, { useEffect, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Divider } from "@mui/material";
import "../Styles/admin.css";
import axios from "../axios";

function RequestedBlog(props) {
  const [posts, setPosts] = useState([]);
  const { searchRequest, search } = props;
  const getSearchRequest = async () => {
    if (search) {
      axios
        .get(`/AllBlogs/search/${searchRequest}`)
        .then((res) => setPosts(res.data));
    }
  };
  const openInNewHandler = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    getSearchRequest();
  }, [search]);
  return <div>
  {posts.map((post) => (
    <div>
      <div className="postSmallCard">
        <div className="postSmallCard-body">
          <div className="date">
            <p>{post.Date}</p>
          </div>
          <div className="postSmallTitle">
            <p>{post.postTitle}</p>
          </div>
          <div className="postSmallBody">
            <textarea readOnly>
              {post.postContent.slice(0, 200) + "..."}
            </textarea>
          </div>
          <div className="postSmallBody-footer">
            <div className="postSmallBody-tags">
              {post.tags.map((tag) => (
                <div className="postBody-tag">
                  <p>{tag.name}</p>
                </div>
              ))}
            </div>
            <div className="postSmallBody-actions">
              <OpenInNewIcon
                onClick={() =>
                  openInNewHandler(
                    `http://localhost:3000/blog/${post.postId}`
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="postSmallCard-image">
          <img src={post.photoURL} alt="" />
        </div>
      </div>
      <div className="divider">
        <Divider />
      </div>
    </div>
    ))}
</div>;
}

export default RequestedBlog;
