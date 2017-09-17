import IpcRendererMediator from "./IpcRendererMediator";
import OpenHandler from "./handlers/Open";

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

class IpcRendererMediatorFactory {
    static create() {
        var openHandler = new OpenHandler();

        handlers = [
            {
                event: "open",
                target: openHandler.handle
            }
        ]
    }
}

export default IpcRendererMediatorFactory;