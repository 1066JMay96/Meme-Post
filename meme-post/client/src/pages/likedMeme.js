import React from "react";
import Navbar from "../components/Navbar"
var likedMeme = React.createClass({
  render: function() {
    return (
      <div>
       <Navbar/>
        <title>MemePost</title>
        
        <div className="container meme">
          <div className="row">
            <div className="likedMeme-container col-md-8">
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default likedMeme;