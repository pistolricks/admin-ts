import {Component} from "solid-js";
import Navigation from "~/components/layout/partials/navigation";


const Header: Component<{
    contextId: string;
}> = props => {


    const contextId = () => props.contextId;


    const navigation = [
        {name: "Custom Apparel", href: "/custom-apparel"},
        {name: "Work Apparel", href: "/work-apparel"},
       // {name: "School Spirit", href: "/school-spirit"},
        {name: "Team Uniforms", href: "/team-uniforms"},
        {name: "Design Lab", href: "/design-lab"},
        {name: "Popup Shops", href: "/popup-shops"}
    ]

    return (<Navigation contextId={contextId()}/>)
};
export default Header;
