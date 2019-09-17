import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { sectionsData } from "./directory.data";
import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sectionsData
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
          />
        ))}
      </div>
    );
  }
}

export default Directory;
