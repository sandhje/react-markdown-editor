export default function editor(state={
    text: "default text"
}, action) {
    switch (action.type) {
        case "EDITOR_UPDATE":
            return Object.assign({}, state, {text: action.payload});
        default:
            return state;
    }
}