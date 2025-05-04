import { ResponsiveImage } from '@responsive-image/solid';
import {ImageData} from "@responsive-image/core";


export default function MyApp(heroImage: ImageData) {
    return <ResponsiveImage src={heroImage} sizes="(min-width: 800px) 800px, 100vw" />


}
