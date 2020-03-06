import React, { Component } from "react";
import { fetchPostsAndUsers } from "../actions";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPostsList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
  return <div className="ui relaxed divided list">{this.renderPostsList()}</div>;
  }
}

function MapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(MapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);
