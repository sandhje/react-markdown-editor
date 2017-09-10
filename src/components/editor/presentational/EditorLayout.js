import React, { Component } from 'react';
import "../assets/Editor.css";

class EditorLayout extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Editor">
                <textarea value={this.props.text} onChange={this.props.handleChange} />
            </div>
        );
    }
}

export default EditorLayout;
