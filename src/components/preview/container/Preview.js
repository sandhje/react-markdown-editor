import { connect } from "react-redux";
import PreviewLayout from "../presentational/PreviewLayout";
import { markdown } from "markdown";
import sanitizeHtml from "sanitize-html";

const allowedTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'img',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ];
const allowedAttributes = {
    a: [ 'href', 'name', 'target' ],
    img: [ 'src' ]
};

const mapStateToProps = (state) => {
    return {
        text: sanitizeHtml(
            markdown.toHTML(state.editor.text),
            {
                allowedTags,
                allowedAttributes
            }
        )
    };
};

const Preview = connect(
    mapStateToProps
)(PreviewLayout);

export default Preview;
