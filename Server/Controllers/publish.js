import express from "express";
import Posts from "../Models/posts.js";


const months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const publishNewBlog = (req, res) => {
  try {
    const date = new Date();
    let dateStr = date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear(); 
    console.log(req.body);
    const { postId, postTitle, postContent, photoURL,tags } = req.body;

    const post = new Posts({ Date:dateStr, postId, postTitle, postContent, photoURL, tags });
    post.save();
    res.status(200).json({message:"Blog posted successfully"});
  } catch (error) {
    console.log(error);
  }
};


export const profile = (req, res) =>{
  try {
    Posts.find({},(err,foundPosts)=>{
      if(err){
        console.log(err);
      }else{
        res.status(200).json(foundPosts);
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export const getEditPost = (req,res)=>{
  const {id} = req.params;
  try {
    Posts.find({postId:id},(err,foundPost)=>{
      if(err){
        console.log(err);
      }else{
        res.status(200).json({foundPost});
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const editPost = (req,res) =>{
  try {
    const {id} = req.params;
    const { postId, postTitle, postContent, photoURL,tags } = req.body;
    Posts.updateOne({postId:id},{ postId, postTitle, postContent, photoURL,tags }, (err,docs)=>{
      if(err){
        console.log(err);
      }else{
        res.status(200).json({message:"update successfull"});
      }
    })
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (req,res)=>{
  const {id} = req.params;
  Posts.deleteOne({postId:id},(err,deletedPost)=>{
    if(err){
      console.log(err);
    }else{
      console.log(deletedPost);
    }
  })
}