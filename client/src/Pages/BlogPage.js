import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../axios";
import RequestedBlog from "../Components/RequestedBlog";
import RecentBlogs from "../Components/RecentBlogs";
import Navbar from "../Components/UI/Navbar";
import "../Styles/Blog.css";
function BlogPage() {
  const { id } = useParams();
  const [fix, setFix] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState(false);
  const [post, setPost] = useState({
    postTitle: "",
    postContent: "",
    photoURL: "",
  });
  const formatBlogData = (postContent) => {
    let blogContent = postContent;
    blogContent = blogContent.split("\n");
    for (let i = 0; i < blogContent.length; i++) {
      blogContent[i] = blogContent[i] + "<br/>";
    }
    blogContent = blogContent.join("");
    document.getElementById("Paragraph").innerHTML = blogContent;
    console.log(blogContent);
  };

  const getPost = async () => {
    const post = await axios
      .get(`/AllBlogs/${id}`)
      .then((res) => {
        setPost(res.data[0]);
        formatBlogData(res.data[0].postContent);
      })
      .catch((err) => console.log(err));
  };

  const setFixed = () => {
    if (window.scrollY > 60) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);
  console.log(fix);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setSearch(false);
  };

  const handleSearch = () => {
    setSearch(true);
  };
  useEffect(() => {
    getPost();
    console.log("hi");
  }, []);
  return (
    <div>
      <Navbar />
      <div className="wrapperBlog">
        <div className="Blog">
          <div className="BlogBody">
            <p className="BlogTitle">{post.postTitle}</p>
            <div className="BlogImage">
              <img src={post.photoURL} alt=""></img>
            </div>
            <div id="Paragraph" className="BlogContent"></div>
          </div>
        </div>
        <div className={fix ? "BlogSticky overflow" : "BlogSticky"}>
          <p className="bold">Search Blogs.</p>
          <div className="Search">
            <input type="text" onChange={handleSearchChange} />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="RequestedBlogs">
            <RequestedBlog searchRequest={searchText} search={search} />
          </div>
          <div>
            <p className="bold">Recent Blogs</p>
          </div>
          <div className="RecentBlogs">
            <RecentBlogs isSmall={true} filter={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
