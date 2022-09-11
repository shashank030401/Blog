import React, { useEffect, useState } from "react";
import axios from "../axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Styles/admin.css";
import { useAuth } from "../Contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";
function AdminProfile() {
  const [posts, setPosts] = useState([]);
  const { logout, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSearch = () => {};
  const getPosts = async () => {
    const data = await axios
      .get("/publish/Profile")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setPosts(data);
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    setLoading(true);
    await axios.delete(`/publish/deletePost/${id}`);
    setLoading(false);
  };
  const handlePublish = ()=>{
    navigate(`/publish`);
  }
  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="admin">
      <div className="admin-nav">
        <div className="nav-logo">Jack Of Thoughts</div>
        <div className="nav-search">
        <button onClick={handlePublish}>Publish New</button>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
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
                  <div className="postBody-actions">
                    <EditIcon onClick={()=>handleEdit(post.postId)} />
                    <DeleteIcon onClick={()=>handleDelete(post.postId)} />
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
    </div>
  );
}

export default AdminProfile;
