import React from "react";
import queryString from "query-string";
const Home = (props) => {
  const str = queryString.parse(props.location.search);
  console.log(str); //{id: "343"}
  console.log(props.location.query);
  console.log(props.location.state);
  return <h1>Home</h1>;
};

export default Home;
