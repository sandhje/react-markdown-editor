import { update } from "../../../actions/EditorActions";

class OpenHandler {
    constructor(fs, store) {
        this._fs = fs;
        this._store = store;
        this._update = undefined;
    }

    get updateEditor() {
        if (this._update === undefined) {
            this._update = update;
        }

        return this._update;
    }

    set updateEditor(update){
        if (update) { 
            this._update = update;
        }
    }

    handle(event, data) {
        if (!data.filenames || !data.filenames.length) {
            return;
        }

        data.filenames.forEach((filename) => {
            this._fs.readFile(filename, 'utf8', (err, data) => {
                if (err) return console.log(err);
                // data is the contents of the text file we just read
                this._store.dispatch(this.updateEditor(data));
            });
        });
    }
}

export default OpenHandler;