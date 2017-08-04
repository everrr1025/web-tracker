import React, { Component } from "react";
import { Route, Switch, Link} from "react-router-dom";


class Home extends Component {
  render() {
    return (
    <div>
        <h2>This is the home section!</h2>
        <Link to='/posts/1111'>Post</Link>
    </div>
    );
  }
}

export default Home;