import OpenHandler from "./handlers/Open";

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

class IpcRendererMediator {
    static registerHandlers(ipcRenderer, eventHandlers) {
        eventHandlers.forEach((handler) => {
            ipcRenderer.on(handler.event, handler.target);
        });
    }

    static configure() {
        var openHandler = new OpenHandler();
        
        var handlers = [
            {
                event: "open",
                target: openHandler.handle
            }
        ];

        new IpcRendererMediator.registerHandlers(ipcRenderer, handlers);
    }
}

export default IpcRendererMediator;