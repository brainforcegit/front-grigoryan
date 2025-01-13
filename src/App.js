import React from "react";
import PostList from "./components/Posts/PostList";
import Header from "./components/Header/Header";
import './styles/global.css'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <PostList/>
      </Router>

    </div>
  );
}

export default App;
