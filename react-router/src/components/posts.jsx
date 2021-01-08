import React from "react";
//import queryString from "query-string";
const Posts = (props) => {
  // http://localhost:3000/posts/2018/06?id=343
  // const str = queryString.parse(props.location.search);
  // console.log(str); //{id: "343"}
  return (
    <div>
      <h1>Posts</h1>
      {`Year:${props.match.params.year} , Month:${props.match.params.month}`}
    </div>
  );
};

export default Posts;
