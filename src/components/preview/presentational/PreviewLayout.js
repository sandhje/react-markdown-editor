import React, { Component } from 'react';

class PreviewLayout extends Component {
    render() {
        return (
            <div className="Preview" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
        );
    }
}

export default PreviewLayout;
