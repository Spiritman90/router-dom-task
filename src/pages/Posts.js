import React from "react";
import { Link, Outlet } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./Posts.css";

function Posts() {
  const [data, isPending, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className='container'>
      <h2>Posts</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map((item) => (
          <div key={item.id} className='card'>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <Link to={`/post/${item.id}`}>Read more comments here...</Link>
          </div>
        ))}
    </div>
  );
}

export default Posts;
