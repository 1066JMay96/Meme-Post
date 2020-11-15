import React from "react";
var homePage = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>MemePost</title>
        {/* Latest compiled and minified CSS & JS */}
        <link href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/flatly/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/style.css" media="screen" title="no title" />
        {/*navbar*/}
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-light bg-light justify-content-center web-nav">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <a className="nav-link " href="memes">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="create">Create Meme</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="liked">Liked Meme</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="users">Meme Creators</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container meme">
          {/*Memes will be posted here*/}
          <div className="row">
            <div className="meme-container col-md-8">
            </div>
          </div>
        </div>
        {/* Custom Script */}
      </div>
    );
  }
});

export default homePage;