import { connect } from "react-redux";
import PreviewLayout from "../presentational/PreviewLayout";

const mapStateToProps = (state) => {
    return {
        text: state.editor.text
    };
};

const Preview = connect(
    mapStateToProps
)(PreviewLayout);

export default Preview;
