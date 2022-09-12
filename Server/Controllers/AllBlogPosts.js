import express from "express";
import Posts from "../Models/posts.js";

export const getRecentPosts = async (req, res) => {
  Posts.find({})
    .limit(3)
    .exec((err, Posts) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(Posts);
      }
    });
};

export const getParticularBlog = async (req, res) => {
  const { blogId } = req.params;
  Posts.find({ postId: blogId }, (err, foundBlog) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(foundBlog);
    }
  });
};

export const getParticularBlogUsingTitle = async (req,res) =>{
  const {blogTitle} = req.params;
  console.log("hi");
  Posts.find({ postTitle: {$regex : blogTitle, $options : 'i'}  }, (err, foundBlog) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(foundBlog);
    }
  });
}