import { connect } from "react-redux";
import { update } from "../../../actions/EditorActions";
import EditorLayout from "../presentational/EditorLayout";

const mapStateToProps = (state) => {
    return {
        text: state.editor.text
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: text => {
            dispatch(update(text));
        }
    };
};

const Editor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorLayout);

export default Editor;
