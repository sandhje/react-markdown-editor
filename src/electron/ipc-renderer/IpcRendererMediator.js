import store from "../../store";
import OpenHandler from "./handlers/Open";

const fs = window.require('fs');
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

class IpcRendererMediator {
    static registerHandlers(ipcRenderer, eventHandlers) {
        eventHandlers.forEach((handler) => {
            ipcRenderer.on(handler.event, handler.target);
        });
    }

    static configure() {
        var openHandler = new OpenHandler(fs, store);
        
        var handlers = [
            {
                event: "open",
                target: openHandler.handle.bind(openHandler)
            }
        ];

        new IpcRendererMediator.registerHandlers(ipcRenderer, handlers);
    }
}

export default IpcRendererMediator;