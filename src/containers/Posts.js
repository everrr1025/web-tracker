import React, { Component } from "react";
class Posts extends Component {
  render() {
    const id = this.props.match.params.id
    return (
    <div>
        <h2>This is the post section111: {id}</h2>
    </div>
    );
  }
}


export default Posts;