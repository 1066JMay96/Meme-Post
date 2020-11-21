import React from "react";

var CreateMeme = React.createClass({
  render: function() {
    return (
      <div>
        
        {/*navbar*/}
        
        {/*navbar end*/}
        <div className="container meme hidden">
          <div id="meme-display-container">
            {/*Will display the meme options*/}
            <div className="row " id="meme-post">
              <h2 id="choose-meme">Choose a meme:</h2>
              <div className="row">
                <div className="meme-choices">
                </div>
              </div>
              {/*Form that holds all the meme info*/}
              <div className="row">
                <form id="meme">
                  <div className="form-group">
                    <label htmlFor="title">Meme Title:</label>
                    <input type="text" className="form-control" id="title-meme" placeholder="Give you're meme a title!" />
                    <br />
                    <label htmlFor="text">Top Text:</label>
                    <input type="text" className="form-control" id="top-text" placeholder="Top text of meme!" />
                    <br />
                    <label htmlFor="text">Bottom Text:</label>
                    <input type="text" className="form-control" id="bottom-text" placeholder="Bottom text of meme!" />
                    <br />
                    <div className="form-group">
                      <label htmlFor="category">Select Meme Creator:</label>
                      <select className="custom-select" id="meme-creator">
                      </select>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-success submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Custom Script */}
      </div>
    );
  }
});

export default CreateMeme;