import express from "express";
import { Post } from "../models/PostModel.js";

const router = express.Router();

// Route for Save a new Post
router.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.content || !request.body.image) {
      return response.status(400).send({
        message: "Send all required fields: title, content, image",
      });
    }
    const newPost = {
      title: request.body.title,
      content: request.body.content,
      image: request.body.image,
    };

    const post = await Post.create(newPost);

    return response.status(201).send(post);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (request, response) => {
  try {
    const posts = await Post.find({});

    return response.status(200).json({
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const post = await Post.findById(id);

    return response.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.title || !request.body.content || !request.body.image) {
      return response.status(400).send({
        message: "Send all required fields: title, content, image",
      });
    }

    const { id } = request.params;

    const result = await Post.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Items not Found" });
    }

    return response.status(200).send({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Post.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "items not found" });
    }

    return response.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Create a new comment for a post
router.post("/:id/comment", async (request, response) => {
  try {
    const postId = request.params.id;
    const comment = {
      text: request.body.text, // The comment text
      user: request.body.user, // The username of the commenter
    };

    const post = await Post.findById(postId);

    if (!post) {
      return response.status(404).json({ message: "Post not found" });
    }

    post.comments.push(comment);
    await post.save();

    return response.status(201).json(post.comments);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Like a post
router.post("/:id/like", async (request, response) => {
  try {
    const postId = request.params.id;

    const post = await Post.findById(postId);

    if (!post) {
      return response.status(404).json({ message: "Post not found" });
    }

    // Increment the likes count by 1
    post.likes = (post.likes || 0) + 1;

    await post.save();

    return response.status(200).json({ likes: post.likes });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for deleting a comment
router.delete("/:postId/comment/:commentIndex", async (request, response) => {
  try {
    const postId = request.params.postId;
    const commentIndex = request.params.commentIndex;

    const post = await Post.findById(postId);

    if (!post) {
      return response.status(404).json({ message: "Post not found" });
    }

    if (commentIndex < 0 || commentIndex >= post.comments.length) {
      return response.status(400).json({ message: "Invalid comment index" });
    }

    // Remove the comment at the specified index
    post.comments.splice(commentIndex, 1);

    await post.save();

    return response.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




export default router;
