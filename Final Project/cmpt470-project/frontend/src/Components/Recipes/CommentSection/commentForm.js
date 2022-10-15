import { useState } from "react";

function CommentForm (){
  return (
    <form onSubmit>
      <textarea
        className="comment-form-textarea"
        value
      />
      <button className="comment-form-button" >
      </button>
      {(
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick
        >
        </button>
      )}
    </form>
  );
};

export default CommentForm;


