import React, { useEffect, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../Styles/admin.css";

import axios from "../axios";
import { useParams } from "react-router";
import { Divider } from "@mui/material";

function RecentBlogs(props) {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const getRecentPosts = async () => {
    const responseData = await axios
      .get("/AllBlogs/RecentPosts")
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (props.filter) {
      const data = responseData.filter((post) => post.postId != id);
      setPosts(data);
    } else {
      setPosts(responseData);
    }
  };

  const openInNewHandler = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    getRecentPosts();
  }, []);
  return (
    <div className="post-holder">
      {!props.isSmall
        ? posts.map((post) => (
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
                    <div className="postBody-actions">
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
                <div className="postCard-image">
                  <img src={post.photoURL} alt="" />
                </div>
              </div>
              <div className="separate"></div>
            </div>
          ))
        : posts.map((post) => (
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
    </div>
  );
}

export default RecentBlogs;
