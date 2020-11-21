import React from "react";
import Navbar from "../components/Navbar"
var likedMeme = React.createClass({
  render: function() {
    return (
      <div>
       <Navbar/>
        <title>MemePost</title>
        {/* Latest compiled and minified CSS & JS */}
        {/*navbar*/}
        
        <div className="container meme">
          {/*-Liked Memes Go Here!!*/}
          <div className="row">
            <div className="likedMeme-container col-md-8">
            </div>
          </div>
        </div>
        {/* Custom Script */}
      </div>
    );
  }
});

export default likedMeme;