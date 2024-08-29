import CakeBuilder from '../CakeBuilder/CakeBuilder';
import Cake from '../Cake/Cake';

import './App.css'

function App() {
  const [layers, setLayers] = useState<Layer[]>([]);

  const addLayer = (newLayer: Layer) => {
    setLayers([...layers, newLayer]);
  };

  const deleteLayer = (index: number) => {
    const newLayer = layers.filter((_, i) => i !== index);
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

export default App
