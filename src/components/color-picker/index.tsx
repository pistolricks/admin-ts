import {Component} from "solid-js";
import {DefaultColorPicker} from "@thednp/solid-color-picker";
import '@thednp/solid-color-picker/style.css'

type PROPS = {
    value: string;
    onChange: (color: string) => any;
}

const ColorPicker: Component<PROPS> = props => {

    const value = () => props.value ?? "#ffffff";

    return <DefaultColorPicker
        format="hex"
        colorPresets={{
            hueSteps: 12,
            hue: 12,
            lightSteps: 12,
        }} value={value()} onChange={props.onChange}/>
}

export {ColorPicker};
