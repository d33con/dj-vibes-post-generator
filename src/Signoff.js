import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function Signoff({ posts }) {
  const signoffs = posts.map(post => {
    if (post !== undefined) {
      const postSplit = /[(,*)(.*)]/;
      const signoff = /(VIBESY)|(Vibesy)|(Shane)/;
      const postArr = post.split(postSplit);
      return postArr.filter(el => el.match(signoff));
    }
    return post;
  });
  const filtered = signoffs.filter(el => el !== undefined && el.length > 0);
  const min = 0;
  const max = filtered.length;
  const randomSignoff =
    filtered[Math.floor(Math.random() * (max - min + 1)) + min];
  return (
    <div className="signoff">
      {randomSignoff}
    </div>
  );
}

Signoff.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Signoff;
