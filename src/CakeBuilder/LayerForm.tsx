import { FormEvent, useState } from "react";
import { Layer } from "../interfaces/interfaces";


interface LayerFormProps {
    onAddLayer: (layer: Layer) => void; 
    onDisplay: (isVisible: boolean) => void; 
    cakeLayers: Layer[];
}

const idMaker = () => {
    let id = 0
    return () => id++
}
const makeId = idMaker()

export function LayerForm ({onAddLayer, onDisplay, cakeLayers}: LayerFormProps ) {
    const [width, setWidth] = useState<number>(0); 
    const [height, setHeight] = useState<number>(0); 
    const [color, setColor] = useState<string>('#000000');

    function handleSubmit(e:FormEvent){
        e.preventDefault(); 
        let widthOfPreviousLayer = topMostLayerWidth(); 

        if (!cakeLayers || width <= widthOfPreviousLayer){
            onAddLayer({width: width, height: height, color: color, id: makeId()});
        } else {
            alert('Please choose width greater than layer underneath')
        }
        setWidth(0); 
        setHeight(0); 
        setColor('');
        onDisplay(false); 
    }
    
    function topMostLayerWidth () {
        //find width of top most layer and return
        return cakeLayers[cakeLayers.length - 1]?.width ?? 500
    }

    return(
        <div className="LayerForm">
            <form className="AddLayerForm" onSubmit={handleSubmit}>
                <div className="InputDiv">
                    <div className="Inputs">
                        <label htmlFor="height">Height   </label>
                        <input id="height" name="height" type="number" min="1" value={height} onChange={(e) => setHeight(Number(e.target.value))}/>
                    </div>
                    <div className="Inputs">
                        <label htmlFor="width">Width   </label>
                        <input id="width" name="width" type="number" min="1" value={width} onChange={(e) => setWidth(Number(e.target.value))}/>
                    </div>
                    <div className="Inputs">
                        <label htmlFor="color">Color   </label>
                        <input id="color" type="color" onChange={(e) => {
                            console.log(e.target.value)
                            setColor(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="FormButtons">
                    <button className="FormButton" type="submit">Submit</button>
                    <button className="FormButton" onClick={() => onDisplay(false)}>Cancel</button>
                </div>
            </form>

        </div>
    )
}