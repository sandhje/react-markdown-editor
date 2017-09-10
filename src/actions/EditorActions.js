export function update(text) {
    return {
        type: "EDITOR_UPDATE",
        payload: text
    };
}