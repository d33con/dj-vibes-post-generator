import React, { Component } from "react";
import axios from "axios";
import RaisedButton from "material-ui/RaisedButton";
import Slider from "material-ui/Slider";
import Quote from "./Quote";

import "./App.css";

class GetPosts extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      length: 10
    };

    this.getPagePosts = this.getPagePosts.bind(this);
    this.setLength = this.setLength.bind(this);
  }

  componentDidMount() {
    this.getPagePosts();
  }

  getPagePosts() {
    axios
      .get("https://graph.facebook.com/v2.9/151712637630/posts", {
        params: {
          access_token: "1406620839430551|z5Jqo7FxOkJXuiccpXOa7cPZujM"
        }
      })
      .then(res => {
        const posts = res.data.data.map(post => post.message);
        this.setState({ posts });
      })
      .catch(error => {
        if (error.response) {
          alert("Tell Oli the token has expired");
        }
      });
  }

  setLength(event, value) {
    this.setState({
      length: value
    });
  }

  render() {
    const styles = {
      button: {
        fontSize: "1.5rem",
        fontFamily: "Bellefair",
        padding: "20px"
      }
    };
    return (
      <div>
        <div className="quote-box">
          <Quote posts={this.state.posts} length={this.state.length} />
        </div>
        <div className="buttons">
          <div className="length-control">
            <label htmlFor="length" className="length-display">
              Gibberish Amount: {this.state.length}
            </label>
            <Slider
              min={1}
              max={20}
              step={1}
              value={this.state.length}
              onChange={this.setLength}
            />
          </div>
          <div className="new-quote-button">
            <RaisedButton
              label="Get more bollocks"
              labelStyle={styles.button}
              primary={true}
              onClick={this.getPagePosts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GetPosts;
