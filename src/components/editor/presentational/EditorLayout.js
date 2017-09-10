import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import "../assets/Editor.css";

class EditorLayout extends Component {
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    render() {
        console.log(this.props);
        return (
            <div className="Editor">
                <MonacoEditor
                    width="100%"
                    height="100%"
                    language="markdown"
                    theme="vs-light"
                    value={this.props.text}
                    onChange={this.props.handleChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}

export default EditorLayout;
