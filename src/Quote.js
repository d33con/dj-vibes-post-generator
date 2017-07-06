import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import Copy from "material-ui/svg-icons/content/content-copy";
import Snackbar from "material-ui/Snackbar";
import ClipboardButton from "react-clipboard.js";

import Signoff from "./Signoff";
import "./App.css";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  onCopy = () => {
    this.setState({
      copied: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      copied: false
    });
  };

  render() {
    const { posts, length } = this.props;
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
    const iconStyle = {
      backgroundColor: "#00bcd4",
      opacity: 0.8,
      borderRadius: "25px"
    };

    return (
      <div>
        <div className="quote-body" id="quote">
          {wisdom}
          <Signoff posts={posts} />
        </div>
        <ClipboardButton
          data-clipboard-target="#quote"
          component="div"
          onSuccess={this.onCopy}
        >
          <IconButton tooltip="Click to copy" style={iconStyle} touch={true}>
            <Copy />Copy
          </IconButton>
        </ClipboardButton>
        <Snackbar
          open={this.state.copied}
          message="Copied!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Quote.propTypes = {
  posts: PropTypes.array.isRequired,
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Quote;
