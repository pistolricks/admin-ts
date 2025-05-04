import {Dock} from "~/components/ui/dock";
import {Component, JSXElement} from "solid-js";

const BaseDock: Component<{
    class?: string;
    children?: JSXElement;
}> = props => {

    const children = () => props.children;

    const className = () => props.class;

    return (
        <Dock class={className()}>
            <>{children()}</>
        </Dock>
    );
}
export {BaseDock};
