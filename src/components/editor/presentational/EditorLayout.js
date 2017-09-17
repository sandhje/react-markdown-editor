import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/markdown";
import "brace/theme/chrome";
import "../assets/Editor.css";

class EditorLayout extends Component {
    editorLoad(editor) {
        console.log('editorLoad', editor);
        editor.focus();
    }

    render() {
        console.log(this.props);
        return (
            <div className="Editor">
                <AceEditor
                    mode="markdown"
                    theme="chrome"
                    name="markdown-editor"
                    height="100%"
                    width="100%"
                    onLoad={this.editorLoad}
                    onChange={this.props.handleChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.props.text}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />
            </div>
        );
    }
}

export default EditorLayout;
