import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    comments: [
      {
        text: {
          type: String,
          required: false,
        },
        user: {
          type: String,
          default: "Anonymous", // Set default username to "Anonymous" for comments
        },
      },
    ],
     likes: {
      type: Number, // Change "likes" type to Number
      default: 0, // Set the default number of likes to 0
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", PostSchema);
