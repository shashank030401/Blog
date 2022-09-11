import React, { useRef } from "react";
import { storage } from "../Utils/firebase";
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "../axios";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import "../Styles/publish.css";
import Separater from "../Components/UI/Separater";
import SnackbarComponent from "../Components/UI/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

function PublishPost() {
  const [imageUpload, setImageUpload] = useState(null);
  const [open, setOpen] = useState(false);
  const [ChangeColorClass, setChangeColorClass] = useState(false);
  const [postData, setPostData] = useState([
    { postTitle: "", postContent: "" },
  ]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleFileSelect = (event) => {
    setImageUpload(event.target.files[0]);
    let imageName = document.getElementById("imageName");
    imageName.innerHTML = event.target.files[0].name;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const PublishPost = async (data) => {
    console.log(data);
    const responseData = await axios
      .post("/publish/publishNewBlog", data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  const handleImageUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const URL = await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setOpen(true);
        setLoading(false);
      });
    });
  };
  const handleOpen = (data) => {
    setOpen(data);
  };
  const handlePublishPost = (e) => {
    e.preventDefault();
    const data = {
      postId: v4(),
      ...postData,
      photoURL: imageUrl,
      tags: tags,
    };
    PublishPost(data);
  };

  const handleTagClick = (event) => {
    const name = event.target.getAttribute("name");
    const isFound = tags.some((tag) => {
      if (tag.name === name) {
        return true;
      }
      return false;
    });
    if (tags.length < 3 && !isFound) {
      setTags((prev) => [
        ...prev,
        { id: v4(), name: event.target.getAttribute("name") },
      ]);
    }
  };

  const handleRemove = (id) => {
    setTags(
      tags.filter((tag) => {
        return tag.id !== id;
      })
    );
  };
  return (
    <div className="publish">
      {/* Post Publish Page navbar */}
      <div className="publish-nav">
        <div className="logo">
          <p>Jack Of Thoughts</p>
        </div>
        <div>
          <button
            className="blog-publish button"
            type="submit"
            onClick={handlePublishPost}
          >
            Publish
          </button>
        </div>
      </div>

      {/* New Blog From */}
      <form className="publish-form">
        <div className="blog-title">
          <input
            required
            type="text"
            name="postTitle"
            placeholder="Title of the blog"
            onChange={handleChange}
          />
        </div>

        {/* uses for doted separation */}
        <Separater />

        <div className="blog-textarea">
          <textarea
            required
            name="postContent"
            placeholder="Content"
            onChange={handleChange}
          />
          <p>Add Tags</p>
          <div className="tagHolder">
            {tags.map((tag) => (
              <div className="tag">
                <p>{tag.name}</p>
                <CloseIcon onClick={()=>handleRemove(tag.id)} />
              </div>
            ))}
          </div>

          <div className="tags">
            <div className="tagSelector" name="AR Management" onClick={handleTagClick}>
              AR Management
            </div>
            <div className="tagSelector" name="Leadership" onClick={handleTagClick}>
              Leadership
            </div>
            <div className="tagSelector" name="Problem Solving" onClick={handleTagClick}>
              Problem Solving
            </div>
          </div>
        </div>
        <Separater />
        <div className="blog-imageUpload">
          <label className="imageUpladInput" for="inputTag">
            <UploadFileIcon />
            <input id="inputTag" type="file" onChange={handleFileSelect} />
            <span id="imageName" className="margin-left">
              Selet File
            </span>
          </label>
          <button className="button margin-left" onClick={handleImageUpload}>
            {loading? "loading.." : "upload"}
          </button>
        </div>
      </form>
      <SnackbarComponent open={open} handleOpen={handleOpen} />
    </div>
  );
}

export default PublishPost;
