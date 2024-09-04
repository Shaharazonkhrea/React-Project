import React from "react";
import { Layer } from "../interfaces/interfaces";
import '../styles/LayerBuilder.css'

interface LayerBuilderProps {
  layers: Layer[];
  setLayers: (layers: Layer[]) => void;
  removeLayer:(index:number) => void
}

const LayerBuilder: React.FunctionComponent<LayerBuilderProps> = ({
  layers,
  setLayers,
  removeLayer
}) => {
  const updateLayer = (index: number, updatedLayer: Layer) => {
    if (index > 0 && updatedLayer.width > layers[index - 1].width) {
      return;
    }
    for (let i = index + 1; i < layers.length; i++) {
      if (updatedLayer.width < layers[i].width) {
        return;
      }
    }

    const newLayers = [...layers];
    newLayers[index] = updatedLayer;
    setLayers(newLayers);
  };

  return (
    <div className="LayerBuilder">
      {layers.map((layer, index) => (
        <div key={layer.id || index} className="layer-builder">
          <div className="layer-edit">
            <p className="LayerLabel">Layer {index + 1} </p>
            <label className="LabelBlue">
              Width ({layer.width}in)
              <input
                type="range"
                min="1"
                max="20"
                value={layer.width}
                onChange={(e) =>
                  updateLayer(index, {
                    ...layer,
                    width: parseInt(e.target.value, 10),
                  })
                }
              />
            </label>
            <label className="LabelBlue">
              Height ({layer.height}in)
              <input
                type="range"
                min="1"
                max="5"
                value={layer.height}
                onChange={(e) =>
                  updateLayer(index, {
                    ...layer,
                    height: parseInt(e.target.value, 10),
                  })
                }
              />
            </label>
            <label className="LabelBlue">
              Color:
              <input className="BorderBlue"
                type="color"
                value={layer.color}
                onChange={(e) =>
                  updateLayer(index, { ...layer, color: e.target.value })
                }
              >
              </input>
            </label>
              <button className = "DeleteButton" onClick={() => removeLayer(index)} >Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayerBuilder;