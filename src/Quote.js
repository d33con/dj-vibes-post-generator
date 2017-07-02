import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Quote({ posts, length }) {
  let postsArr = [];
  const gibberish = posts.map(post => {
    if (post !== undefined) {
      const postSplit = /[(,*)(.*)]/;
      const postArr = post.split(postSplit);
      return postsArr.concat(postArr.filter(post => post !== ""));
    }
    return postsArr.filter(post => post !== "");
  });
  const flattened = gibberish.reduce((a, b) => {
    return a.concat(b);
  }, []);
  const randomNumbers = [];
  let i = 0;
  while (i < length) {
    randomNumbers.push(
      Math.floor(Math.random() * (flattened.length - 1 - 0) - 0)
    );
    i++;
  }
  const wisdom = randomNumbers
    .map(i => {
      return flattened[i] !== "" ? flattened[i] : flattened[i - 1];
    })
    .join(",,,,");
  return (
    <div className="quote-body">
      {wisdom}
    </div>
  );
}

Quote.propTypes = {
  posts: PropTypes.array.isRequired,
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Quote;
