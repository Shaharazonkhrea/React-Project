import CakeBuilder from '../CakeBuilder/CakeBuilder';
import './App.css'
import { useState } from 'react';
import { Layer } from '../interfaces/interfaces';
import Cake from '../Cake/Cake';

const App = () => {
  const [layers, setLayers] = useState<Layer[]>([])
  const addLayer = (newLayer: Layer) => {
    setLayers([newLayer, ...layers]);
  };
  const deleteLayer = (index: number) => {
    const newLayers = layers.filter((_, i) => i !== index);
    setLayers(newLayers);
  };
  return (
    <div className="app-container">
      <h1>Cake Builder</h1>
      <CakeBuilder layers={layers} addLayer={addLayer} deleteLayer={deleteLayer} setLayers={setLayers} />
      <Cake layers={layers} />
    </div>
  );
}

export default App