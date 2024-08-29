import { FC, useState } from 'react';
import { Layer } from '../interfaces/interfaces.tsx';
import Cake from '../Cake/Cake.tsx';

const CakeBuilder: FC = () => {
  const [layers, setLayers] = useState<Layer[]>([]);

  const addLayer = () => {
    const newLayer: Layer = {
      height: 3, 
      width: 6,  
      color: 'blue',
      id: 0 
    };
    setLayers([...layers, newLayer]);
  };

  const deleteLayer = (index: number) => {
    const newLayers = layers.filter((_, i) => i !== index);
    setLayers(newLayers);
  };

  return (
    <div>
      <Cake layers={layers} />
      <button onClick={addLayer}>Add Layer</button>
      {layers.map((layer, index) => (
        <div key={index}>
          <li>
            Layer {index + 1} - Height: {layer.height}, Width: {layer.width}, Color: {layer.color}
          </li>
          <button onClick={() => deleteLayer(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CakeBuilder;