import {Component, createEffect, createSignal, For, onCleanup, onMount} from "solid-js";
import {css} from "solid-styled";
import {fabric} from 'fabric';
import {BaseDock} from "~/components/dock";
import {DockIcon} from "~/components/ui/dock";
import FontFaceObserver from 'fontfaceobserver';
import BasePopover from "~/components/ui/popover";
import {ImageUp, Plus, Shirt, Trash, Type} from "lucide-solid";
import {ColorPicker} from "~/components/color-picker";
import {Button} from "~/components/ui/button";

// Note: This component requires fabric.js and its TypeScript definitions
// These have been added to package.json as dependencies

const ShirtDecorator: Component<{
    image_url?: string

}> = props => {
    let canvasRef: HTMLCanvasElement | undefined;
    let fabricCanvas: fabric.Canvas;

    const image_url = () => props.image_url ?? "https://cdnm.sanmar.com/imglib/mresjpg/2022/f5/5286_white_flat_front.jpg";

    const [canvasWidth, setCanvasWidth] = createSignal(600);
    const [canvasHeight, setCanvasHeight] = createSignal(850);
    const [selectedColor, setSelectedColor] = createSignal<string>("#ffffff");
    const [fabricLoaded, setFabricLoaded] = createSignal(false);
    const [getOpen, setOpen] = createSignal(false);

    // Available shirt colors
    const shirtColors = [
        {name: "White", value: "#ffffff"},
        {name: "Black", value: "#000000"},
        {name: "Red", value: "#ff0000"},
        {name: "Blue", value: "#0000ff"},
        {name: "Green", value: "#008000"},
    ];


    const fonts = ["Inter", "Roboto", "Open Sans", "Montserrat"];


    // Initialize fabric canvas
    onMount(() => {
        try {
            if (typeof fabric !== 'undefined' && canvasRef) {
                fabricCanvas = new fabric.Canvas(canvasRef, {
                    width: canvasWidth(),
                    height: canvasHeight(),
                    backgroundColor: selectedColor() ?? "",
                });

                // Load shirt template
                loadShirtTemplate();

                // Set fabric as loaded
                setFabricLoaded(true);

                // Handle window resize
                const handleResize = () => {
                    const containerWidth = document.querySelector('.canvas-container')?.clientWidth || 600;
                    if (containerWidth < canvasWidth()) {
                        const scale = containerWidth / canvasWidth();
                        fabricCanvas.setZoom(scale);
                        fabricCanvas.setWidth(containerWidth);
                        fabricCanvas.setHeight(canvasHeight() * scale);
                    }
                };

                window.addEventListener('resize', handleResize);
                handleResize();

                onCleanup(() => {
                    window.removeEventListener('resize', handleResize);
                    fabricCanvas.dispose();
                });
            } else {
                console.error("Fabric.js is not loaded or canvas reference is missing");
            }
        } catch (error) {
            console.error("Error initializing fabric canvas:", error);
        }
    });

    let shirtCanvas: fabric.Path | null = null;
    let collarCanvas: fabric.Path | null = null;
    let leftCanvas: fabric.Path | null = null;
    let rightCanvas: fabric.Path | null = null;

    // Load shirt template
    const loadShirtTemplate = () => {
        if (!fabricCanvas) return;

        // Clear canvas
        fabricCanvas.clear();
        fabricCanvas.setBackgroundColor("", fabricCanvas.renderAll.bind(fabricCanvas));


        const shirtPath = new fabric.Path('M 300,50 L 450,100 L 500,250 L 450,400 L 300,450 L 150,400 L 100,250 L 150,100 Z', {
            fill: "",
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
            opacity: 0.5,
        });

        // Add collar
        const collar = new fabric.Path('M 270,50 L 300,100 L 330,50 Z', {
            fill: '#dddddd',
            stroke: '#aaaaaa',
            strokeWidth: 1,
            selectable: false,
            evented: false,
            opacity: 0.5,
        });

        // Add sleeves
        const leftSleeve = new fabric.Path('M 150,100 L 50,150 L 100,250 Z', {
            fill: "",
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
        });

        const rightSleeve = new fabric.Path('M 450,100 L 550,150 L 500,250 Z', {
            fill: "",
            stroke: '#aaaaaa',
            strokeWidth: 2,
            selectable: false,
            evented: false,
        });


        // Add all elements to canvas

        shirtCanvas = shirtPath;
        collarCanvas = collar;
        leftCanvas = leftSleeve;
        rightCanvas = rightSleeve;

        fabricCanvas.add(shirtPath, collar, leftSleeve, rightSleeve);
        fabricCanvas.bringToFront(shirtPath)


        fabricCanvas.renderAll();
    };

    let globalImage: fabric.Image | null = null;

    fabric.Image.fromURL(image_url(), function (img) {
        globalImage = img;
        img.top = -40;
        img.left = 0;
        img.absolutePositioned = true;
        img.scale(0.5);
        img.selectable = false;
        img.evented = false;
        fabricCanvas.add(img);
    });


    // Change shirt color


    let textArr: fabric.IText[] = [];

    // Add text to shirt
    const addText = () => {
        if (!fabricCanvas) return;


        const text = new fabric.IText('Text', {
            left: 250,
            top: 200,
            fontFamily: 'Inter',
            fontSize: 30,
            fill: selectedColor(),
            textAlign: 'center',
        });


        textArr.push(text);
        fabricCanvas.add(text)
        fabricCanvas.bringToFront(text);
        fabricCanvas.setActiveObject(text);

        fabricCanvas.renderAll();

    };

    const changeFont = (font: string) => {
        fonts.unshift('Roboto');
        const select = document.getElementById("font-family");
        if (!select) return;
        fonts.forEach(function (font) {
            var option = document.createElement('option');
            option.innerHTML = font;
            option.value = font;
            select.appendChild(option);
        });


// Apply selected font on change
        const fontSelect = document.getElementById('font-family');
        if (fontSelect) {
            fontSelect.onchange = function (e: Event) {
                const select = e.target as HTMLSelectElement;
                if (select.value !== 'Roboto') {
                    loadAndUse(select.value);
                } else {
                    const activeObject = fabricCanvas.getActiveObject() as fabric.IText;
                    if (activeObject) {
                        activeObject.set({fontFamily: select.value});
                    }
                    fabricCanvas.requestRenderAll();
                }
            };
        }
    }

    function loadAndUse(font: string) {
        const myfont = new FontFaceObserver(font)
        myfont.load()
            .then(function () {
                // when font is loaded, use it.
                const activeObject = fabricCanvas.getActiveObject() as fabric.IText;
                if (activeObject) {
                    activeObject.set({fontFamily: font});
                }
                fabricCanvas.requestRenderAll();
            }).catch(function (e) {
            console.log(e)
            alert('font loading failed ' + font);
        });
    }


    const changeTextColor = (color: string) => {
        console.log("changeTextColor", color);
        setSelectedColor(() => color);

            const activeObject = fabricCanvas.getActiveObject() as fabric.IText;

        activeObject?.set('fill', selectedColor());

            fabricCanvas.renderAll();

    };

    let uploadedImage: fabric.Image | null = null;

    // Add image to shirt
    const addImage = (e?: Event) => {
        if (!e) return;
        if (!fabricCanvas) return;
        const input = e.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imgObj = new Image();
                imgObj.src = event.target?.result as string;

                imgObj.onload = () => {
                    const image = new fabric.Image(imgObj);
                    uploadedImage = image;

                    // Scale image to fit on shirt
                    const maxWidth = 200;
                    const maxHeight = 200;

                    if (image.width && image.height) {
                        if (image.width > maxWidth || image.height > maxHeight) {
                            const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
                            image.scale(scale);
                        }
                    }

                    image.set({
                        left: 250,
                        top: 200,
                        opacity: 0.7,
                        originX: 'center',
                        originY: 'center',
                    });

                    image.clipPath?.set(shirtCanvas as fabric.Path);

                    fabricCanvas.bringToFront(image);
                    fabricCanvas.add(image);
                    fabricCanvas.setActiveObject(image);

                    fabricCanvas.renderAll();
                };
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleOpen = () => {
        if (!globalImage) return;
        if (!shirtCanvas) return;
        if (!collarCanvas) return;
        if (!leftCanvas) return;
        if (!rightCanvas) return;
        setOpen((prev) => !prev);
        getOpen() ? fabricCanvas.sendToBack(globalImage) : (fabricCanvas.sendToBack(shirtCanvas), fabricCanvas.sendToBack(leftCanvas), fabricCanvas.sendToBack(rightCanvas), fabricCanvas.sendToBack(collarCanvas));
    }

    const handleSendToFront = () => {
        if (!globalImage) return;
        fabricCanvas.sendToBack(globalImage)
    }


    // Delete selected object
    const deleteSelected = () => {
        if (!fabricCanvas) return;

        const activeObject = fabricCanvas.getActiveObject();
        if (activeObject) {
            fabricCanvas.remove(activeObject);

            textArr = textArr.filter(item => item !== activeObject); // Removes the object with id 2

            console.log("textArr", textArr);

            fabricCanvas.renderAll();
        }
    };


    createEffect(() => console.log(selectedColor()));

    css`

        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


        .shirt-decorator {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .canvas-container {
            margin: 0px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
            max-width: 100%;
            max-height: 100%;
        }

        .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
            justify-content: center;
        }

        .color-options {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 15px;
        }

        .color-option {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid #ddd;
            transition: transform 0.2s;
        }

        .color-option:hover {
            transform: scale(1.1);
        }

        .color-option.selected {
            border: 2px solid #333;
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }


        .file-input {
            display: none;
        }

        .file-label {
            padding: 8px 16px;
            background-color: #335d92;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
        }

        .file-label:hover {
            background-color: #264673;
        }

        .fabric-not-loaded {
            padding: 20px;
            background-color: #fff3cd;
            color: #856404;
            border: 1px solid #ffeeba;
            border-radius: 4px;
            margin-bottom: 20px;
            text-align: center;
        }
    `;

    return (
        <div class="shirt-decorator">
            {!fabricLoaded() && (
                <div class="fabric-not-loaded">
                    <p>Fabric.js library is not loaded. The library is included in package.json.</p>
                    <p>Make sure to run <code>npm install</code> or <code>yarn</code> to install all dependencies.</p>
                    <p>If you're still seeing this message, try restarting the development server.</p>
                </div>
            )}


            <div class="canvas-container">

                <canvas class="relative" ref={canvasRef} width={canvasWidth()} height={canvasHeight()}></canvas>

            </div>


            <BaseDock class={"-mt-7"}>
                <DockIcon onClick={handleOpen}>
                    <Shirt style={{
                        opacity: !fabricLoaded() ? '0.5' : '1',
                        cursor: !fabricLoaded() ? 'not-allowed' : 'pointer'
                    }} class={"stroke-cyan-700 fill-sky-100"}/>
                </DockIcon>

                <div class="h-full border-x mx-1"/>

                <DockIcon>
                    <BasePopover
                        icon={<Type class="stroke-cyan-700 fill-sky-100 size-full"/>}
                        title="">
                        <div class={"flex flex-col w-full"}>

                            <div class="w-full flex justify-between items-center">
                                <Button size={"icon"} class={"hover:bg-gray-300"} onClick={addText}>
                                    <Plus class={" size-5"}/>
                                </Button>
                                <div class={'py-4'}>
                                    <ColorPicker value={selectedColor()} onChange={(c: string) => changeTextColor(c)}/>
                                </div>
                                    </div>


                            <div class="space-x-2">
                                <button class={"p-2 hover:text-gray-300 "} onClick={() => loadAndUse("Inter")}>
                                    Inter
                                </button>
                                <button class={"p-2 hover:text-gray-300 "} onClick={() => loadAndUse("Roboto")}>
                                    Roboto
                                </button>
                                <button class={"p-2 hover:text-gray-300 "} onClick={() => loadAndUse("Open Sans")}>
                                    Open Sans
                                </button>
                                <button class={"p-2 hover:text-gray-300 "} onClick={() => loadAndUse("Montserrat")}>
                                    Montserrat
                                </button>
                            </div>
                        </div>
                    </BasePopover>
                </DockIcon>

                <DockIcon>
                    <label class="" style={{
                        opacity: !fabricLoaded() ? '0.5' : '1',
                        cursor: !fabricLoaded() ? 'not-allowed' : 'pointer'
                    }}>
                        <ImageUp class="stroke-cyan-700 fill-sky-100 size-full"/>
                        <input
                            type="file"
                            class="file-input"
                            accept="image/*"
                            onChange={addImage}
                            disabled={!fabricLoaded()}
                        />
                    </label>
                </DockIcon>


                <div class="h-full border-x mx-1"/>

                <DockIcon onClick={deleteSelected}>
                    <Trash class={"stroke-rose-700 fill-red-100"}/>
                </DockIcon>
            </BaseDock>

            <For each={textArr}>
                {(item: fabric.IText) => (
                    <div class={"text-lg text-gray-500"}>
                        {item.name}
                    </div>
                )}
            </For>
        </div>
    );
}

export default ShirtDecorator;
