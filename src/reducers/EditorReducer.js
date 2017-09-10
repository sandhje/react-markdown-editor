const defaultText = `# React markdown editor

Welcome to react markdown editor.

Paste your markdown into the text field on the left and see it rendered instantly on the right.

A lot of thing still need to be done to make this editor any good, e.g.:

* Fix monaco loading issues in electron app
* Open/Save functionality
* Timetravel (read: Ctrl-Z / Ctrl-Y)
* Fixing layout issues
* Proper build and distibution processes (appveyor, travis, s3-hosted binaries and stuff like that)

If you have any suggestions, please let me know, e.g. on [gitter](https://gitter.im/sandhje/react-markdown-editor) or by [filing an issue](https://github.com/sandhje/react-markdown-editor/issues)
`;

export default function editor(state={
    text: defaultText
}, action) {
    switch (action.type) {
        case "EDITOR_UPDATE":
            return Object.assign({}, state, {text: action.payload});
        default:
            return state;
    }
}