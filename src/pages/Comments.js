import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Comments() {
  const { id } = useParams();

  const [dataComment, isLoadingComment, errorComment] = useFetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const [dataPost, isLoadingPost, errorPost] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  console.log(dataComment);

  const showComment = dataComment?.map((comment, index) => {
    return (
      <li key={index} className='card'>
        <p>{comment?.body}</p>
        <p>{comment?.email}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>{dataPost?.title}</h1>
      <p>{dataPost?.body}</p>
      <ul>{showComment}</ul>
    </div>
  );
}

export default Comments;
