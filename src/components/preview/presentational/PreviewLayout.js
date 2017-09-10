import React, { Component } from 'react';

class PreviewLayout extends Component {
    render() {
        return (
            <div className="Preview">
                {this.props.text}
            </div>
        );
    }
}

export default PreviewLayout;
