import {renderEntireTree} from "../render";

let state = {
    header: {
        _class: 'javascript',
        get getClass(){
            return this._class
        },
        setClass(value){
            this._class = value;
            renderEntireTree();
        }
    }
}

export default state;