import { useState } from "react"
import { Layer } from "../interfaces/interfaces"
import CakeBuilder from "./CakeBuilder"
import '../css/cakeBuilder.css'
import CakeLayer from "../Cake/CakeLayer"
import LayerBuilder from "./LayerBuilder"

export function CombinedBuild() {
  const [layers, setLayers] = useState<Layer[]>([])
  function addLayer(layer: Layer) {
    setLayers([...layers, layer])
  }

  function removeLayer(index: number) {
    setLayers([...layers.slice(0, index), ...layers.slice(index+1)])
  }

  return (
    <div className="CombinedBuild">
      <div className="BodyDiv">
        <div className="LayersDiv">
          <CakeBuilder addLayer={addLayer} cakeLayers={layers} />
          <div className="LayerInfoDiv">
            <LayerBuilder layers={layers} setLayers={setLayers} removeLayer={removeLayer} />
          </div>
        </div>
        <div className="CakeDiv">
          <div className="CakeLayersDisplay">
            {layers.map((layer) => (<CakeLayer layer={layer} />))}
          </div>
        </div>
      </div>
    </div>
  )
}