import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { SECTIONS_DATA } from "./directory.data";
import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: SECTIONS_DATA
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem
            key={section.id}
            title={section.title.toUpperCase()}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
