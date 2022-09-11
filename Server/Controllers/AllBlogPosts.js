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
