import { useState } from 'react';
import CakeBuilder from './CakeBuilder';
import Cake from './Cake'
import { Layer } from './Layer'

function App() {
  const [layers, setLayers] = useState<Layer[]>([]);

  const addLayer = (newLayer: Layer) => {
    setLayers([...layers, newLayer]);
  };

  const deleteLayer = (index: number) => {
    const newLayers = layers.filter((_, i) => i !== index);
    setLayers(newLayers);
  };

  return (
    <div>
      <h1>Cake Builder</h1>
      <CakeBuilder layers={layers} addLayer={addLayer} deleteLayer={deleteLayer} />
      <Cake layers={layers} />
    </div>
  );
}

export default App;
