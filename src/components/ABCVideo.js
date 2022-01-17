import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/components/ABCVideo.css";

class ABCVideo extends Component {
  state = {
    autoplay: 0,
    firstVideoClass: "hidden",
  };

  playVideo = () => {
    this.setState((prevState) => ({
      autoplay: 1,
      firstVideoClass: "shown",
    }));
  };

  render() {
    const { path, title, thumbnailURL, src } = this.props;
    return (
      <div className="abc_element">
        <div className="thumbnail_container" onClick={this.playVideo}>
          <div className={this.state.firstVideoClass}>
            <div className="video">
              <iframe
                title={title}
                width="100%"
                height="100%"
                src={`${src}?&autoplay=${this.state.autoplay}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoplay="true"
                allowfullscreen="true"></iframe>
            </div>
          </div>
          <img className="thumbnail" src={thumbnailURL} alt={title} />
          <div className="play_icon">
            <span>
              <i className="far fa-play-circle"></i>
            </span>
          </div>
        </div>
        <div className="text">
          <NavLink className="link_reset" to={`/copernicus_college/abc/${path}`}>
            {title}
          </NavLink>
        </div>
        <div className="hidden_button hidden">
          <NavLink className="link_reset" to={`/copernicus_college/abc/${path}`}>
            Zobacz więcej
          </NavLink>
        </div>
      </div>
    );
  }
}

export default ABCVideo;
