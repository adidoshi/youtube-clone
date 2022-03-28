import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/commentsAction";
import SingleComment from "./SingleComment";
import "./_comments.scss";

const Comments = ({ videoId, totalComments }) => {
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const [text, setText] = useState("");

  const _comments = comments?.map((com) => com.snippet.topLevelComment.snippet);

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
    window.location.reload();
  };

  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img
          src={user?.photoURL}
          alt="avatar"
          className="rounded-circle me-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>

      <div className="comments_list">
        {_comments?.map((comment, i) => (
          <SingleComment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
