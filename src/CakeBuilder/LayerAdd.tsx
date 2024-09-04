import { useState } from "react"
import { Layer } from "../interfaces/interfaces"
import { LayerForm } from "./LayerForm"
import '../styles/LayerAdd.css'

interface LayerAddProps {
    addLayer: (layer: Layer) => void
    cakeLayers:Layer[]
}
export function LayerAdd({addLayer, cakeLayers}: LayerAddProps){
    const [showForm, setShowForm] = useState<boolean>(false)

    return(
        <div className="LayerAdd">
            <button className="AddLayerBtn" onClick = {() => showForm === false ? setShowForm(true): setShowForm(false)}>Add Layer</button>
            {showForm === true ? <LayerForm onAddLayer = {addLayer} onDisplay={setShowForm} cakeLayers={cakeLayers}/> : null}
        </div>
    )
}