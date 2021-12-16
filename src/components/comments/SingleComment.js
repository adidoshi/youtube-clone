import React from "react";
import moment from "moment";
import "./_comments.scss";

const SingleComment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className="singleComment p-2 d-flex">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle me-3" />
      <div className="singleComment_body">
        <p className="singleComment_header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default SingleComment;
